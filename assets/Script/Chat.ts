import { sampleProto } from '../Protocols/sampleProto'
import GameflexManager from "./GameflexManager";
import { Packet, ResultCodeNamedRoom, ResultCodeLeaveRoom, ResultCodeLogin, ResultCodeLogout, UserAgent } from "gameflex-connector";

// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class Chat extends cc.Component {
    ServiceName = "ChatService";
    UserType = "ChatUser";
    RoomType = "ChatRoom";

    @property(cc.Node)
    connect: cc.Node = null;

    start() {
        // 서버에 등록된 service를 사용하기위한 UserAgent를 생성합니다.
        // 먼저 GetUserAgent 통해 생성된 UserAgent가 있는지 확인 후, 없을 경우 
        // CreateUserAgent()를 호출해 UserAgent를 생성합니다.
        // AddCallback을 이용해 사용자 정의 프로토콜을 처리할 콜백을 등록하며
        // 중복 등록되지 않도록 UserAgent가 생성될 때 등록합니다. 
        // 중복 등록할 경우 등록된 횟수만큼 호출됩니다.
        let user: UserAgent = GameflexManager.GetInstance().GetUserAgent(this.ServiceName);
        if (user == null) {
            user = GameflexManager.GetInstance().CreateUserAgent(this.ServiceName);

            // 사용자 정의 프로토콜을 처리할 콜백 등록
            // AddCallback<T extends IMessage>(message: new () => T, callback: (agent: UserAgent, msg: T) => void): void;
            //   T : 처리할 프로토콜 타입
            //   message : 처리할 프로토콜 타입
            //   callback : 전달 받을 콜백.
            //     agent : 패킷을 받은 UserAgent 객체
            //     msg : 처리할 프로토콜 객체
            user.AddCallback(sampleProto.ChatMessageToC, this.onChatMessageToC);
        }
        this.init();
    }

    init() {
        this.labelLogin.node.color = cc.Color.RED;
        this.labelNickName.node.color = cc.Color.RED;
        this.labelNamedRoom.node.color = cc.Color.RED;
        this.clearMessages();
    }

    @property(cc.Label)
    labelLogin: cc.Label = null;
    @property(cc.EditBox)
    editBoxChannel: cc.EditBox = null;
    public onClickLogin() {
        console.log("Login - clicked");
        let user: UserAgent = GameflexManager.GetInstance().GetUserAgent(this.ServiceName);

        // Service에 로그인합니다.
        // Login(userType: string, payload?: Payload, channelId?: string, callback?: (agent: UserAgent, resultCode: ResultCodeLogin, loginInfo: LoginInfo) => void): void;
        //   userType : 서버에 등록된 UserType. 
        //   payload : 추가적으로 필요한 데이터가 있을 경우 사용.(선택 사항)
        //   channelId : 사용할 할 체널. (선택 사항. 입력하지 않을 경우 빈 문자열로 처리되며, 서버에 빈 문자열로된 체널이 설정되어야 합니다.)
        //   callback : 결과를 전달 받을 콜백.(선택 사항)
        //     agent : Login을 호출한 UserAgent 객체.
        //     resultCode : Login 결과
        //     loginInfo : login 된 User 정보.
        user.Login(this.UserType, null, this.editBoxChannel.string, (UserAgent, resultCode, loginInfo) => {
            // 성공인 경우 labelLogin의 색갈을 초록색으로 , 실패인 경우 빨간색으로 지정.
            this.labelLogin.node.color = resultCode == ResultCodeLogin.LOGIN_SUCCESS ? cc.Color.GREEN : cc.Color.RED;
            
            // 서버와의 접속이 끊기더라도 서버 설정에 따라 로그인 상태가 유지될 수 있습니다. 
            // 로그인 상태가 유지된 경우 Login 을 하면 loginInfo.isRelogined 값이 true로 설정됩니다.
            // 또 방에 들어가 있는 경우 loginInfo.isJoinedRoom값이 true로 설정됩니다.
            this.labelNamedRoom.node.color = loginInfo.isJoinedRoom ? cc.Color.GREEN : cc.Color.RED;

            // 서버 컨텐츠에서 payload에 추가정보를 넣어 보내줄 수 있습니다.
            // 이 예제에서는 nickName을 넣어 보내주며, 처음 로그인인 경우에는 빈 문자열, 
            // 재 로그인인 경우에는 이전에 등록한 nickName을 보내주게 됩니다.
            let userInfo = loginInfo.payload.GetPBMessage(sampleProto.UserInfo);
            if (userInfo != null && userInfo.nickName.length > 0) {
                this.labelNickName.node.color = cc.Color.GREEN;
                this.editBoxNickName.string = userInfo.nickName;
            } else {
                this.labelNickName.node.color = cc.Color.RED;
            }

            console.log("Login : " + ResultCodeLogin[resultCode]);
        });
    }

    public onClickLogout() {
        console.log("Logout - clicked");
        let user = GameflexManager.GetInstance().GetUserAgent(this.ServiceName);

        // 서비스에서 로그아웃 합니다. 
        //   callback : 결과를 전달 받을 콜백.(선택 사항)
        //     agent : Logout 호출한 UserAgent 객체.
        //     resultCode : Logout 결과
        //     payload : 서버 컨텐츠에서 보내주는 추가 데이터.
        user.Logout((UserAgent, resultCode, payload) => {
            if (resultCode == 0) {
                this.init();
            }

            console.log("Login : " + ResultCodeLogout[resultCode]);
        });
    }

    @property(cc.Label)
    labelNickName: cc.Label = null;
    @property(cc.EditBox)
    editBoxNickName: cc.EditBox = null;
    public onClickRegisterNickName() {
        console.log("RegisterNickName - clicked");
        let user = GameflexManager.GetInstance().GetUserAgent(this.ServiceName);
        let reqMsg = sampleProto.RegisterNickNameReq.create({ nickName: this.editBoxNickName.string });

        // 사용자 정의 프로토콜을 이용해 서버에 Request를 합니다. 
        // Request는 항상 서버의 응답을 기다리며 응답을 올때까지 다음 요청을 처리하지 않습니다.
        // 응답이 오지 않을 경우 ErrorCode 가 TIMEOUT으로 IUserListener.OnErrorCommand() 콜백이 호출됩니다. 
        // 서버로부터 응답을 받을 필요가 없을 경우 Send를 사용하면 응답을 기다리지 않습니다.
        // RequestPb<T extends IMessage>(reqMsg: IMessage, callback?: (userAgent: UserAgent, resMsg: T) => void): void;
        //   T : 응답으로 받을 프로토콜 타입.
        //   reqMsg : 요청으로 보낼 프로토콜 객체.
        //   callback : 결과를 전달 받을 콜백.(선택 사항)
        //     userAgent: RequestPb를 한 UserAgent
        //     resMsg: 응답으로 받은 프로토콜 객체.
        user.RequestPb<sampleProto.RegisterNickNameRes>(reqMsg, (userAgent, resMsg) => {
            this.labelNickName.node.color = resMsg.isSuccess ? cc.Color.GREEN : cc.Color.RED;
            console.log("RegisterNickName : " + resMsg.isSuccess);
        });
    }

    @property(cc.Label)
    labelNamedRoom: cc.Label = null;
    @property(cc.EditBox)
    editBoxRoomName: cc.EditBox = null;
    public onClickNamedRoom() {
        console.log("NamedRoom - clicked");
        let user = GameflexManager.GetInstance().GetUserAgent(this.ServiceName);

        // 이름 있는 Room 생성 요청.
        // NamedRoom(roomName: string, roomType: string, isParty: boolean, payload?: Payload, callback?: (agent: UserAgent, resultCode: ResultCodeNamedRoom, roomName: string, payLoad: Payload) => void): void;
        //   roomName : 만들려는 room 이름. 같은 이름의 room이 이미 있을 경우 해당 room에 join한다. 
        //   roomType : 만들려고하는 room의 roomType.
        //   isParty : party matching을 위한 방인지 여부.
        //   payload : 추가적으로 필요한 데이터가 있을 경우 사용.(선택 사항)
        //   callback : 결과를 전달 받을 콜백.(선택 사항)
        //     agent : LeaveRoom 호출한 UserAgent 객체.
        //     resultCode : LeaveRoom 결과.
        //     roomId : 입장한 room의 Id.
        //     roomName : 입장한 room의 이름.
        //     created : 입장한 room을 생성했는지 여부.(방장 여부)
        //     payload : 서버 컨텐츠에서 보내주는 추가 데이터.
        user.NamedRoom(this.editBoxRoomName.string, this.RoomType, false, null, (UserAgent, resultCode, roomId, roomName, created, payload) => {
            this.labelNamedRoom.node.color = (resultCode == ResultCodeNamedRoom.NAMED_ROOM_SUCCESS || resultCode == ResultCodeNamedRoom.NAMED_ROOM_FAIL_ALREADY_JOINED_ROOM) ? cc.Color.GREEN : cc.Color.RED;
            console.log("NamedRoom : " + ResultCodeNamedRoom[resultCode] + " roomId : " + roomId + ", roomName : " + roomName + ", created : " + created);
        });
    }

    public onClickLeaveRoom() {
        console.log("LeaveRoom - clicked");
        let user = GameflexManager.GetInstance().GetUserAgent(this.ServiceName);

        // Room 나가기
        // LeaveRoom(payload?: Payload, callback?: (agent: UserAgent, resultCode: ResultCodeLeaveRoom, roomId: string, payload: Payload) => void): void;
        //   payload : 추가적으로 필요한 데이터가 있을 경우 사용.(선택 사항)
        //   callback : 결과를 전달 받을 콜백.(선택 사항)
        //     agent : LeaveRoom 호출한 UserAgent 객체.
        //     resultCode : LeaveRoom 결과
        user.LeaveRoom(null, (UserAgent, resultCode) => {
            if (0 == resultCode) {
                this.labelNamedRoom.node.color = cc.Color.RED;
                this.clearMessages();
            }
            console.log("LeaveRoom : " + ResultCodeLeaveRoom[resultCode]);
        });
    }

    @property(cc.EditBox)
    editBoxMessage: cc.EditBox = null;
    @property(cc.ScrollView)
    messageView: cc.ScrollView = null;
    public clearMessages() {
        this.messageView.content.removeAllChildren();
    }

    public onClickClear() {
        this.clearMessages();
    }

    public onClickChat() {
        console.log("Chat - clicked");
        let user = GameflexManager.GetInstance().GetUserAgent(this.ServiceName);
        let msg = sampleProto.ChatMessageToS.create({ message: this.editBoxMessage.string });
        let packet = Packet.CreateFromPbMsg(msg);

        // 사용자 정의 프로토콜을 이용해 서버에 Send를 합니다. 
        // Send는 Request에 대한 응답과 상관없이 바로바로 처리되며, 서버의 응답을 기다리지 않습니다.
        // 서버로부터 응답을 받을 필요가 있을 경우 Request를 사용하면 응답을 기다리게 됩니다.        
        // user.Send(packet);
        // SendPb<T extends IMessage>(msg: IMessage): void;
        //   T : 서버로 보낼 프로토콜 타입.
        //   msg : 서버로 보낼 프로토콜 객체.
        user.SendPb(msg);

        this.editBoxMessage.string = "";
        this.editBoxMessage.focus();
    }

    public onChatMessageToC = (userAgent, msg: sampleProto.ChatMessageToC) => {
        let chatItem = new cc.Node();
        chatItem.anchorX = 0;
        chatItem.color = cc.Color.BLACK;
        let label = chatItem.addComponent(cc.Label);
        label.string = msg.message;

        this.messageView.content.addChild(chatItem);
        this.messageView.scrollToBottom();
        console.log("ChatMessageToC : " + msg.message);
    }
}
