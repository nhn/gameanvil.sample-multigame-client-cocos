import { sampleProto } from '../Protocols/sampleProto'
import TardisManager from "./TardisManager";
import { Packet, ResultCodeNamedRoom, ResultCodeMatchRoom, ResultCodeMatchUserStart, ResultCodeMatchPartyStart, IUserListener, ResultCodeMatchPartyCancel, ResultCodeMatchUserDone, ResultCodeMatchUserCancel, ResultCodeLogin, ResultCodeLogout, ResultCodeLeaveRoom } from "ngt_connector";


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
        let user = TardisManager.GetInstance().GetUser(this.ServiceName);
        if (user == null) {
            user = TardisManager.GetInstance().CreateUser(this.ServiceName);
            user.AddCallback(sampleProto.GameMessageToC, this.onGameMessageToC)
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
        let user = TardisManager.GetInstance().GetUser(this.ServiceName);
        user.Login(this.UserType, null, this.editBoxChannel.string, (UserAgent, resultCode, loginInfo) => {
            this.labelLogin.node.color = resultCode == 0 ? cc.Color.GREEN : cc.Color.RED;
            this.labelPartyRoom.node.color = loginInfo.isJoinedRoom ? cc.Color.GREEN : cc.Color.RED;
            console.log("Login : " + ResultCodeLogin[resultCode]);
        });
    }

    public onClickLogout() {
        console.log("Logout - clicked");
        let user = TardisManager.GetInstance().GetUser(this.ServiceName);
        user.Logout((UserAgent, resultCode, payload) => {
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
        let user = TardisManager.GetInstance().GetUser(this.ServiceName);
        user.MatchRoom(true, true, this.RoomType_MatchRoom, null, null, (UserAgent, resultCode, roomId, payload) => {
            console.log("MatchRoom : " + ResultCodeMatchRoom[resultCode] + (roomId != null && roomId.length > 0 ? " roomId : " + roomId : ""));
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
        let user = TardisManager.GetInstance().GetUser(this.ServiceName);
        user.MatchUserStart(this.RoomType_MatchUser, null, (UserAgent, resultCode, payload) => {
            if (resultCode == ResultCodeMatchUserStart.MATCH_USER_START_SUCCESS)
                this.labelMatchUser.node.color = cc.Color.YELLOW;
            console.log("MatchUser : " + ResultCodeMatchUserStart[resultCode]);
        });
    }

    public onClickMatchUserCancel() {
        console.log("MatchUserCancel - clicked");
        let user = TardisManager.GetInstance().GetUser(this.ServiceName);
        user.MatchUserCancel(this.RoomType_MatchUser, (UserAgent, resultCode) => {
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
        let user = TardisManager.GetInstance().GetUser(this.ServiceName);
        user.NamedRoom(this.editBoxRoomName.string, this.RoomType_Party, true, null, (UserAgent, resultCode, roomName, payload) => {
            this.labelPartyRoom.node.color = (resultCode == ResultCodeNamedRoom.NAMED_ROOM_SUCCESS || resultCode == ResultCodeNamedRoom.NAMED_ROOM_FAIL_ALREADY_JOINED_ROOM) ? cc.Color.GREEN : cc.Color.RED;
            console.log("PartyRoom : " + ResultCodeNamedRoom[resultCode] + (roomName != null && roomName.length > 0 ? " roomName : " + roomName : ""));
        });
    }

    public onClickLeaveRoom() {
        console.log("LeaveRoom - clicked");
        let user = TardisManager.GetInstance().GetUser(this.ServiceName);
        user.LeaveRoom(null, (UserAgent, resultCode) => {
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
        let user = TardisManager.GetInstance().GetUser(this.ServiceName);
        user.MatchPartyStart(this.RoomType_MatchParty, null, (UserAgent, resultCode, payload) => {
            if (resultCode == ResultCodeMatchPartyStart.MATCH_PARTY_START_SUCCESS)
                this.labelMatchParty.node.color = cc.Color.YELLOW;
            console.log("MatchParty : " + ResultCodeMatchPartyStart[resultCode]);
        });
    }

    public onClickMatchPartyCancel() {
        console.log("MatchPartyCancel - clicked");
        let user = TardisManager.GetInstance().GetUser(this.ServiceName);
        user.MatchPartyCancel(this.RoomType_MatchParty, (UserAgent, resultCode) => {
            if (resultCode == ResultCodeMatchPartyCancel.MATCH_PARTY_CANCEL_SUCCESS)
                this.labelMatchParty.node.color = cc.Color.RED;
            console.log("MatchPartyCancel : " + ResultCodeMatchPartyCancel[resultCode]);
        });
    }

    OnMatchUserDone(user, resultCode, created, roomId, payload) {
        console.log("MatchUserDone : " + ResultCodeMatchUserDone[resultCode] + (roomId != null && roomId.length > 0 ? " roomId : " + roomId : ""));
        if (resultCode == ResultCodeMatchUserDone.MATCH_USER_DONE_SUCCESS) {
            if (this.labelMatchUser.node.color.toRGBValue() == cc.Color.YELLOW.toRGBValue())
                this.labelMatchUser.node.color = cc.Color.GREEN;
            if (this.labelMatchParty.node.color.toRGBValue() == cc.Color.YELLOW.toRGBValue())
                this.labelMatchParty.node.color = cc.Color.GREEN;
        }
    }

    OnMatchUserTimeout(user) {
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
        let user = TardisManager.GetInstance().GetUser(this.ServiceName);
        let msg = sampleProto.GameMessageToS.create({ message: this.editBoxMessage.string });
        let packet = Packet.CreateFromPbMsg(msg);
        user.Send(packet);

        this.editBoxMessage.string = "";
        this.editBoxMessage.focus();
    }

    public onGameMessageToC = (userAgent, msg: sampleProto.GameMessageToC) => {
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
