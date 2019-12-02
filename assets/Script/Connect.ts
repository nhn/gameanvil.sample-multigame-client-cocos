import TardisManager from "./TardisManager";
import { ResultCodeConnect, ResultCodeAuth } from "ngt_connector";
import Chat from "./Chat";
import Game from "./Game";

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
export default class Connect extends cc.Component {

    @property(cc.Label)
    labelConnect: cc.Label = null;
    @property(cc.EditBox)
    edtIPAddress: cc.EditBox = null;

    @property(cc.Label)
    labelAuthenticate: cc.Label = null;
    @property(cc.EditBox)
    edtAccountId: cc.EditBox = null;
    @property(cc.EditBox)
    edtPassword: cc.EditBox = null;

    @property(cc.Node)
    menuNode: cc.Node = null;

    @property(Chat)
    chat: Chat = null;

    @property(Game)
    game: Game = null;

    start() {
        let session = TardisManager.GetInstance().GetSession();
        session.AddOnDisconnect((agent, message) => {
            this.labelConnect.node.color = cc.Color.RED;
            this.labelAuthenticate.node.color = cc.Color.RED;

            this.node.active = true;
            this.menuNode.active = false;
            this.chat.init();
            this.chat.node.active = false;
            this.game.init();
            this.game.node.active = false;
        });

        this.labelConnect.node.color = cc.Color.RED;
        this.labelAuthenticate.node.color = cc.Color.RED;

        this.menuNode.active = false;
        this.chat.node.active = false;
        this.game.node.active = false;
    }

    onEnable() {
        this.labelConnect.node.color = cc.Color.RED;
        this.labelAuthenticate.node.color = cc.Color.RED;

        this.menuNode.active = false;
        this.chat.node.active = false;
        this.game.node.active = false;
    }

    public onConnect() {
        console.log("Connect - clicked");
        let session = TardisManager.GetInstance().GetSession();
        session.Connect(this.edtIPAddress.string, (agent, resultCode) => {
            console.log("Connect : " + ResultCodeConnect[resultCode]);
            if (ResultCodeConnect.CONNECT_SUCCESS == resultCode)
                this.labelConnect.node.color = cc.Color.GREEN;
            else
                this.labelConnect.node.color = cc.Color.RED;
        });
    }

    public onAuthenticate() {
        console.log("Authenticate - clicked");
        let session = TardisManager.GetInstance().GetSession();
        session.Authenticate("deviceId", this.edtAccountId.string, this.edtPassword.string, null, (agent, resultCode) => {
            console.log("Authenticate : " + ResultCodeAuth[resultCode]);
            if (ResultCodeAuth.AUTH_SUCCESS == resultCode) {
                this.labelConnect.node.color = cc.Color.GREEN;
                this.node.active = false;
                this.onChat();
            } else {
                this.labelConnect.node.color = cc.Color.RED;
                this.node.active = true;
                this.chat.node.active = false;
                this.game.node.active = false;
            }
        });
    }

    public onChat() {
        this.node.active = false;
        this.menuNode.active = true;
        this.chat.node.active = true;
        this.game.node.active = false;
    }

    public onMatch() {
        this.node.active = false;
        this.menuNode.active = true;
        this.chat.node.active = false;
        this.game.node.active = true;
    }

    public onDisconnect() {
        let session = TardisManager.GetInstance().GetSession();
        session.Disconnect("click Disconnect");
    }
}
