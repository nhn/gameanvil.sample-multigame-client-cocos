import { sampleProto } from '../Protocols/sampleProto'
import TardisManager from "./TardisManager";
import { Packet, ResultCodeNamedRoom, ResultCodeLeaveRoom, ResultCodeLogin, ResultCodeLogout } from "ngt_connector";


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
        let user = TardisManager.GetInstance().GetUser(this.ServiceName);
        if (user == null) {
            user = TardisManager.GetInstance().CreateUser(this.ServiceName);
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
        let user = TardisManager.GetInstance().GetUser(this.ServiceName);
        user.Login(this.UserType, null, this.editBoxChannel.string, (UserAgent, resultCode, loginInfo) => {
            this.labelLogin.node.color = resultCode == 0 ? cc.Color.GREEN : cc.Color.RED;
            this.labelNamedRoom.node.color = loginInfo.isJoinedRoom ? cc.Color.GREEN : cc.Color.RED;
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
        let user = TardisManager.GetInstance().GetUser(this.ServiceName);
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
        let user = TardisManager.GetInstance().GetUser(this.ServiceName);
        let msg = sampleProto.RegisterNickNameReq.create({ nickName: this.editBoxNickName.string });
        let packet = Packet.CreateFromPbMsg(msg);
        user.Request(packet, (userAgent, packet) => {
            let msg = packet.GetPbMessage<sampleProto.RegisterNickNameRes>();
            this.labelNickName.node.color = msg.isSuccess ? cc.Color.GREEN : cc.Color.RED;
            console.log("RegisterNickName : " + msg.isSuccess);
        });
    }

    @property(cc.Label)
    labelNamedRoom: cc.Label = null;
    @property(cc.EditBox)
    editBoxRoomName: cc.EditBox = null;
    public onClickNamedRoom() {
        console.log("NamedRoom - clicked");
        let user = TardisManager.GetInstance().GetUser(this.ServiceName);
        user.NamedRoom(this.editBoxRoomName.string, this.RoomType, false, null, (UserAgent, resultCode) => {
            this.labelNamedRoom.node.color = (resultCode == ResultCodeNamedRoom.NAMED_ROOM_SUCCESS || resultCode == ResultCodeNamedRoom.NAMED_ROOM_FAIL_ALREADY_JOINED_ROOM) ? cc.Color.GREEN : cc.Color.RED;
            console.log("NamedRoom : " + ResultCodeNamedRoom[resultCode]);
        });
    }

    public onClickLeaveRoom() {
        console.log("LeaveRoom - clicked");
        let user = TardisManager.GetInstance().GetUser(this.ServiceName);
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
        let user = TardisManager.GetInstance().GetUser(this.ServiceName);
        let msg = sampleProto.ChatMessageToS.create({ message: this.editBoxMessage.string });
        let packet = Packet.CreateFromPbMsg(msg);
        user.Send(packet);
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
