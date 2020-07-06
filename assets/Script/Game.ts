import { sampleProto } from '../Protocols/sampleProto'
import GameAnvilManager from "./GameAnvilManager";
import { Packet, ResultCodeNamedRoom, ResultCodeMatchRoom, ResultCodeMatchUserStart, ResultCodeMatchPartyStart, IUserListener, ResultCodeMatchPartyCancel, ResultCodeMatchUserDone, ResultCodeMatchUserCancel, ResultCodeLogin, ResultCodeLogout, ResultCodeLeaveRoom } from "gameanvil-connector";


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
export default class Game extends cc.Component implements IUserListener {
    ServiceName = "GameService";
    UserType = "GameUser";
    RoomType_Party = "PartyRoom";
    RoomType_MatchRoom = "GameRoom_MatchRoom";
    RoomType_MatchUser = "GameRoom_MatchUser";
    RoomType_MatchParty = "GameRoom_MatchParty";

    @property(cc.Node)
    connect: cc.Node = null;

    start() {

        // 서버에 등록된 service를 사용하기위한 UserAgent를 생성합니다.
        // 먼저 GetUserAgent 통해 생성된 UserAgent가 있는지 확인 후, 없을 경우 
        // CreateUserAgent()를 호출해 UserAgent를 생성합니다.
        // AddCallback을 이용해 사용자 정의 프로토콜을 처리할 콜백을 등록하며
        // 중복 등록되지 않도록 UserAgent가 생성될 때 등록합니다. 
        // 중복 등록할 경우 등록된 횟수만큼 호출됩니다.
        let user = GameAnvilManager.GetInstance().GetUserAgent(this.ServiceName);
        if (user == null) {
            user = GameAnvilManager.GetInstance().CreateUserAgent(this.ServiceName);

            // 사용자 정의 프로토콜을 처리할 콜백 등록
            // AddCallback<T extends IMessage>(message: new () => T, callback: (agent: UserAgent, msg: T) => void): void;
            //   T : 처리할 프로토콜 타입
            //   message : 처리할 프로토콜 타입
            //   callback : 전달 받을 콜백.
            //     agent : 패킷을 받은 UserAgent 객체
            //     msg : 처리할 프로토콜 객체
            user.AddCallback(sampleProto.GameMessageToC, this.onGameMessageToC)

            // 기본 기능에대한 응답을 처리할 IUserListener 등록
            // AddListener(listener: IUserListener): void;
            //   listener : IUserListener 를 구현한 객체. 이 예제에서는 OnMatchUserDone, OnMatchUserTimeout을 위해 사용했다.
            user.AddListener(this);
        }

        this.init();
    }

    init() {
        this.labelLogin.node.color = cc.Color.RED;
        this.labelPartyRoom.node.color = cc.Color.RED;
        this.labelMatchRoom.node.color = cc.Color.RED;
        this.labelMatchUser.node.color = cc.Color.RED;
        this.labelMatchParty.node.color = cc.Color.RED;
        this.clearMessages();
    }

    @property(cc.Label)
    labelLogin: cc.Label = null;
    @property(cc.EditBox)
    editBoxChannel: cc.EditBox = null;
    public onClickLogin() {
        console.log("Login - clicked");
        let user = GameAnvilManager.GetInstance().GetUserAgent(this.ServiceName);
        // Service에 로그인합니다.
        // Login(userType: string, payload?: Payload, channelId?: string, callback?: (agent: UserAgent, resultCode: ResultCodeLogin, loginInfo: LoginInfo) => void): void;
        //   userType : 서버에 등록된 UserType. 
        //   payload : 추가적으로 필요한 데이터가 있을 경우 사용.(선택 사항)
        //   channelId : 사용할 할 체널. (선택 사항. 입력하지 않을 경우 빈 문자열로 처리되며, 서버에 빈 문자열로된 체널이 설정되어야 합니다.)
        //   callback : 결과를 전달 받을 콜백.(선택 사항)
        //     agent : Login을 호출한 UserAgent 객체.
        //     resultCode : Login 결과
        //     loginInfo : login 된 User 정보.
        user.Login(this.UserType, null, this.editBoxChannel.string, (agent, resultCode, loginInfo) => {
            this.labelLogin.node.color = resultCode == 0 ? cc.Color.GREEN : cc.Color.RED;
            this.labelPartyRoom.node.color = loginInfo.isJoinedRoom ? cc.Color.GREEN : cc.Color.RED;
            console.log("Login : " + ResultCodeLogin[resultCode]);
        });
    }

    public onClickLogout() {
        console.log("Logout - clicked");
        let user = GameAnvilManager.GetInstance().GetUserAgent(this.ServiceName);
        // 서비스에서 로그아웃 합니다. 
        //   callback : 결과를 전달 받을 콜백.(선택 사항)
        //     agent : Logout 호출한 UserAgent 객체.
        //     resultCode : Logout 결과
        //     payload : 서버 컨텐츠에서 보내주는 추가 데이터.
        user.Logout((agent, resultCode, payload) => {
            if (resultCode == ResultCodeLogout.LOGOUT_SUCCESS) {
                this.init();
            }
            console.log("Login : " + ResultCodeLogout[resultCode]);
        });
    }

    @property(cc.Label)
    labelMatchRoom: cc.Label = null;
    public onClickMatchRoom() {
        console.log("MatchRoom - clicked");
        let user = GameAnvilManager.GetInstance().GetUserAgent(this.ServiceName);
        // Room 매칭
        // 서버에서 구현한 조건에 맞는 Room으로 매칭시킨다.
        // MatchRoom(isCreateRoomIfNotJoinRoom: boolean, isMoveRoomIfJoinedRoom: boolean, roomType: string, payload?: Payload, leaveRoomPayload?: Payload, callback?: (agent: UserAgent, resultCode: ResultCodeMatchRoom, roomId: string, payload: Payload) => void): void;
        //   isCreateRoomIfNotJoinRoom : 조건에 맞는 Room을 못찾을 경우 Room을 생성할지 여부.
        //   isMoveRoomIfJoinedRoom : 이미 Room에 들어가 있는 경우 다른 방으로 이동할지 여부. 
        //   roomType : 서버에 등록된 RoomType, 
        //   payload : 추가적으로 필요한 데이터가 있을 경우 사용.(선택 사항)
        //   leaveRoomPayload : 다른 Room으로 이동할 경우에 지금 있는 Room에서 나갈때 추가적으로 필요한 데이터가 있을 경우 사용.(선택 사항) 
        //   callback : 결과를 전달 받을 콜백.(선택 사항)
        //     agent : MatchRoom 호출한 UserAgent 객체.
        //     resultCode : MatchRoom 결과
        //     roomId: 매칭된 room의 id 
        //     roomName : 매칭된 room의 이름.
        //     created : 매칭된 room을 생성했는지 여부.(방장 여부)
        //     payload: 서버 컨텐츠에서 보내주는 추가 데이터.
        user.MatchRoom(true, true, this.RoomType_MatchRoom, null, null, (agent, resultCode, roomId, roomName, created, payload) => {
            console.log("MatchRoom : " + ResultCodeMatchRoom[resultCode] + " roomId : " + roomId + ", roomName : " + roomName + ", created : " + created);
            switch (resultCode) {
                case ResultCodeMatchRoom.MATCH_ROOM_SUCCESS:
                case ResultCodeMatchRoom.MATCH_ROOM_FAIL_ALREADY_JOINED_ROOM:
                case ResultCodeMatchRoom.MATCH_ROOM_FAIL_LEAVE_ROOM:
                    this.labelMatchRoom.node.color = cc.Color.GREEN;
                    break;
                default:
                    this.labelMatchRoom.node.color = cc.Color.RED;
                    break;
            }

        });
    }

    @property(cc.Label)
    labelMatchUser: cc.Label = null;
    public onClickMatchUser() {
        console.log("MatchUser - clicked");
        let user = GameAnvilManager.GetInstance().GetUserAgent(this.ServiceName);

        // User 매칭 시작
        // 서버에서 구현한 조건에 맞는 User끼리 매칭시킨다.
        // MatchUserStart(roomType: string, payload?: Payload, callback?: (agent: UserAgent, resultCode: ResultCodeMatchUserStart, payLoad: Payload) => void): void;
        //   roomType : 서버에 등록된 RoomType, 
        //   payload : 추가적으로 필요한 데이터가 있을 경우 사용.(선택 사항)
        //   callback : 결과를 전달 받을 콜백.(선택 사항)
        //     agent : MatchUserStart 호출한 UserAgent 객체.
        //     resultCode : MatchUserStart 결과.
        //     payload : 서버 컨텐츠에서 보내주는 추가 데이터.
        user.MatchUserStart(this.RoomType_MatchUser, null, (agent, resultCode, payload) => {
            if (resultCode == ResultCodeMatchUserStart.MATCH_USER_START_SUCCESS)
                this.labelMatchUser.node.color = cc.Color.YELLOW;
            console.log("MatchUser : " + ResultCodeMatchUserStart[resultCode]);
        });
    }

    public onClickMatchUserCancel() {
        console.log("MatchUserCancel - clicked");
        let user = GameAnvilManager.GetInstance().GetUserAgent(this.ServiceName);
        // User 매칭 취소
        // User 매칭을 취소한다.
        // MatchUserCancel(roomType: string, callback?: (agent: UserAgent, resultCode: ResultCodeMatchUserCancel) => void): void;
        //   roomType : 서버에 등록된 RoomType, 
        //   callback : 결과를 전달 받을 콜백.(선택 사항)
        //     agent : MatchUserCancel 호출한 UserAgent 객체.
        //     resultCode : MatchUserCancel 결과.
        user.MatchUserCancel(this.RoomType_MatchUser, (agent, resultCode) => {
            if (resultCode == ResultCodeMatchUserCancel.MATCH_USER_CANCEL_SUCCESS)
                this.labelMatchUser.node.color = cc.Color.RED;
            console.log("MatchUserCancel : " + ResultCodeMatchUserCancel[resultCode]);
        });
    }

    @property(cc.Label)
    labelPartyRoom: cc.Label = null;
    @property(cc.EditBox)
    editBoxRoomName: cc.EditBox = null;
    public onClickNamedRoom() {
        console.log("PartyRoom - clicked");
        let user = GameAnvilManager.GetInstance().GetUserAgent(this.ServiceName);
        // Party 매치를 위한 이름 있는 Room 생성 요청.
        // party를 구성할 user들을 같은 Room 에 모으고, Room에 모인 유저들을 한 party로 구성해서 매칭을 한다. 
        // NamedRoom의 isParty를 true로 설정하고, 같은 roomName을 사용한다.
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
        user.NamedRoom(this.editBoxRoomName.string, this.RoomType_Party, true, null, (agent, resultCode, roomId, roomName, created, payload) => {
            this.labelPartyRoom.node.color = (resultCode == ResultCodeNamedRoom.NAMED_ROOM_SUCCESS || resultCode == ResultCodeNamedRoom.NAMED_ROOM_FAIL_ALREADY_JOINED_ROOM) ? cc.Color.GREEN : cc.Color.RED;
            console.log("PartyRoom : " + ResultCodeNamedRoom[resultCode]  + " roomId : " + roomId + ", roomName : " + roomName + ", created : " + created);
        });
    }

    public onClickLeaveRoom() {
        console.log("LeaveRoom - clicked");
        let user = GameAnvilManager.GetInstance().GetUserAgent(this.ServiceName);
        // Room 나가기
        // LeaveRoom(payload?: Payload, callback?: (agent: UserAgent, resultCode: ResultCodeLeaveRoom, roomId: string, payload: Payload) => void): void;
        //   payload : 추가적으로 필요한 데이터가 있을 경우 사용.(선택 사항)
        //   callback : 결과를 전달 받을 콜백.(선택 사항)
        //     agent : LeaveRoom 호출한 UserAgent 객체.
        //     resultCode : LeaveRoom 결과
        user.LeaveRoom(null, (agent, resultCode) => {
            if (ResultCodeLeaveRoom.LEAVE_ROOM_SUCCESS == resultCode) {
                if (this.labelMatchRoom.node.color.toRGBValue() == cc.Color.GREEN.toRGBValue())
                    this.labelMatchRoom.node.color = cc.Color.RED;
                if (this.labelMatchUser.node.color.toRGBValue() == cc.Color.GREEN.toRGBValue())
                    this.labelMatchUser.node.color = cc.Color.RED;
                if (this.labelMatchParty.node.color.toRGBValue() == cc.Color.GREEN.toRGBValue())
                    this.labelMatchParty.node.color = cc.Color.RED;
                if (this.labelPartyRoom.node.color.toRGBValue() == cc.Color.GREEN.toRGBValue())
                    this.labelPartyRoom.node.color = cc.Color.RED;
                this.clearMessages();
            }
            console.log("LeaveRoom : " + ResultCodeLeaveRoom[resultCode]);
        });
    }

    @property(cc.Label)
    labelMatchParty: cc.Label = null;
    public onClickMatchParty() {
        console.log("MatchParty - clicked");
        let user = GameAnvilManager.GetInstance().GetUserAgent(this.ServiceName);
        // Party 매칭 시작
        // 서버에서 구현한 조건에 맞는 Party나 User를 매칭시킨다.
        // MatchPartyStart(roomType: string, payload?: Payload, callback?: (agent: UserAgent, resultCode: ResultCodeMatchPartyStart, payload: Payload) => void): void;
        //   roomType : 서버에 등록된 RoomType, 
        //   payload : 추가적으로 필요한 데이터가 있을 경우 사용.(선택 사항)
        //   callback : 결과를 전달 받을 콜백.(선택 사항)
        //     agent : MatchPartyStart 호출한 UserAgent 객체.
        //     resultCode : MatchPartyStart 결과.
        //     payload : 서버 컨텐츠에서 보내주는 추가 데이터.
        user.MatchPartyStart(this.RoomType_MatchParty, null, (agent, resultCode, payload) => {
            if (resultCode == ResultCodeMatchPartyStart.MATCH_PARTY_START_SUCCESS)
                this.labelMatchParty.node.color = cc.Color.YELLOW;
            console.log("MatchParty : " + ResultCodeMatchPartyStart[resultCode]);
        });
    }

    public onClickMatchPartyCancel() {
        console.log("MatchPartyCancel - clicked");
        let user = GameAnvilManager.GetInstance().GetUserAgent(this.ServiceName);
        // Party 매칭 취소
        // Party 매칭을 취소한다.
        // MatchPartyCancel(roomType: string, callback?: (agent: UserAgent, resultCode: ResultCodeMatchPartyCancel) => void): void;
        //   roomType : 서버에 등록된 RoomType, 
        //   callback : 결과를 전달 받을 콜백.(선택 사항)
        //     agent : MatchPartyCancel 호출한 UserAgent 객체.
        //     resultCode : MatchPartyCancel 결과.
        user.MatchPartyCancel(this.RoomType_MatchParty, (agent, resultCode) => {
            if (resultCode == ResultCodeMatchPartyCancel.MATCH_PARTY_CANCEL_SUCCESS)
                this.labelMatchParty.node.color = cc.Color.RED;
            console.log("MatchPartyCancel : " + ResultCodeMatchPartyCancel[resultCode]);
        });
    }

    OnMatchPartyStart(agent, resultCode, payload) {
        // Party 매칭이 시작되었을 때 전달 받을 콜백
        //   agent : MatchPartyStart 를 전달 받은 UserAgent 객체.
        //   resultCode : MatchPartyStart 결과.
        //   payload : 서버 컨텐츠에서 보내주는 추가 데이터.
        if (resultCode == ResultCodeMatchPartyStart.MATCH_PARTY_START_SUCCESS)
            this.labelMatchParty.node.color = cc.Color.YELLOW;
        console.log("OnMatchPartyStart : " + ResultCodeMatchPartyStart[resultCode]);
    }

    OnMatchPartyCancel(agent, resultCode) {
        // Party 매칭이 취소되었을 때 전달 받을 콜백
        // Party 매칭을 취소한다.
        // MatchPartyCancel(roomType: string, callback?: (agent: UserAgent, resultCode: ResultCodeMatchPartyCancel) => void): void;
        //   roomType : 서버에 등록된 RoomType, 
        //   callback : 결과를 전달 받을 콜백.(선택 사항)
        //     agent : MatchPartyCancel 호출한 UserAgent 객체.
        //     resultCode : MatchPartyCancel 결과.
        if (resultCode == ResultCodeMatchPartyCancel.MATCH_PARTY_CANCEL_SUCCESS)
            this.labelMatchParty.node.color = cc.Color.RED;
        console.log("OnMatchPartyCancel : " + ResultCodeMatchPartyCancel[resultCode]);
    }

    OnMatchUserDone(agent, resultCode, created, roomId, payload) {
        // MatchUser나 MatchParty 에 대한 결과를 전달받을 콜백
        //   user : MatchUser나 MatchParty 를 호출한 UserAgent 객체
        //   resultCode : MatchUser나 MatchParty 의 결과
        //   created : Room을 생성했는지 여부.
        //   roomId : 생성된 room 의 id.
        //   payload : 서버 컨텐츠에서 보내주는 추가 데이터.
        console.log("MatchUserDone : " + ResultCodeMatchUserDone[resultCode] +  " roomId : " + roomId + ", created : " + created);
        if (resultCode == ResultCodeMatchUserDone.MATCH_USER_DONE_SUCCESS) {
            if (this.labelMatchUser.node.color.toRGBValue() == cc.Color.YELLOW.toRGBValue())
                this.labelMatchUser.node.color = cc.Color.GREEN;
            if (this.labelMatchParty.node.color.toRGBValue() == cc.Color.YELLOW.toRGBValue())
                this.labelMatchParty.node.color = cc.Color.GREEN;
        }
    }

    OnMatchUserTimeout(agent) {
        // MatchUser나 MatchParty 가 정해진 시간동안 이루어 지지 않을 경우 전달받을 콜백
        //   user : MatchUser나 MatchParty 를 호출한 UserAgent 객체
        console.log("MatchUserTimeout");
        if (this.labelMatchUser.node.color.toRGBValue() == cc.Color.YELLOW.toRGBValue())
            this.labelMatchUser.node.color = cc.Color.RED;
        if (this.labelMatchParty.node.color.toRGBValue() == cc.Color.YELLOW.toRGBValue())
            this.labelMatchParty.node.color = cc.Color.GREEN;
    }

    @property(cc.ScrollView)
    messageView: cc.ScrollView = null;
    @property(cc.EditBox)
    editBoxMessage: cc.EditBox = null;
    public clearMessages() {
        this.messageView.content.removeAllChildren();
    }

    public onClickClear() {
        this.clearMessages();
    }

    public onClickChat() {
        console.log("Chat - clicked");
        let user = GameAnvilManager.GetInstance().GetUserAgent(this.ServiceName);
        let msg = sampleProto.GameMessageToS.create({ message: this.editBoxMessage.string });
        let packet = Packet.CreateFromPbMsg(msg);

        // 사용자 정의 프로토콜을 이용해 서버에 Send를 합니다. 
        // Send는 Request에 대한 응답과 상관없이 바로바로 처리되며, 서버의 응답을 기다리지 않습니다.
        // 서버로부터 응답을 받을 필요가 있을 경우 Request를 사용하면 응답을 기다리게 됩니다.        
        // user.Send(packet);
        // SendPb<T extends IMessage>(msg: IMessage): void;
        //   T : 서버로 보낼 프로토콜 타입.
        //   msg : 서버로 보낼 프로토콜 객체.
        user.Send(packet);

        this.editBoxMessage.string = "";
        this.editBoxMessage.focus();
    }

    public onGameMessageToC = (agent, msg: sampleProto.GameMessageToC) => {
        let chatItem = new cc.Node();
        chatItem.anchorX = 0;
        chatItem.color = cc.Color.BLACK;
        let label = chatItem.addComponent(cc.Label);
        label.string = msg.message;

        this.messageView.content.addChild(chatItem);
        this.messageView.scrollToBottom();
        console.log("GameMessageToC : " + msg.message);
    }
}
