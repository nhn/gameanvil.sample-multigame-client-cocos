import GameflexManager from "./GameflexManager";
import { ResultCodeConnect, ResultCodeAuth, LoginedUserInfo, Payload } from "gameflex-connector";
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
        let connection = GameflexManager.GetInstance().GetConnectionAgent();
        connection.AddOnDisconnect((connection, resultCode, reason, force, payload) => {
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
        let connection = GameflexManager.GetInstance().GetConnectionAgent();
        // 서버 접속
        // Connect(ipAdress: string, callback?: (agent: ConnectionAgent, resultCode: ResultCodeConnect) => void): void;
        //  ipAddress : 접속할 서버 주소. 
        //  callback : 결과를 전달 받을 콜백.(선택 사항)
        //    agent : Connect를 호출한 ConnectionAgent 객체.
        //    resultCode : Connect 결과.
        connection.Connect(
            this.edtIPAddress.string,
            (connectionAgent, resultCode) => {
                console.log("Connect : " + ResultCodeConnect[resultCode]);
                if (ResultCodeConnect.CONNECT_SUCCESS == resultCode) {
                    // 접속 성공
                    this.labelConnect.node.color = cc.Color.GREEN;
                } else {
                    // 접속 실패
                    this.labelConnect.node.color = cc.Color.RED;
                }
            }
        );
    }

    public onAuthenticate() {
        console.log("Authenticate - clicked");
        let connection = GameflexManager.GetInstance().GetConnectionAgent();
        // 인증. 이 예제에서는 Account Id 와 Password가 같을 경우에 인증 성공.
        // Authenticate(deviceId: string, accountId: string, password: string, payload?: Payload, callback?: (agent: ConnectionAgent, resultCode: ResultCodeAuth, loginedUserInfoList: Array<LoginedUserInfo>, message: string, payload: Payload) => void): void;
        //  deviceId : 중복 접속을 체크하기 위해 사용.
        //  accountId : 사용자 계정. 
        //  password : 비밀번호.
        //  payload : 추가적으로 필요한 데이터가 있을 경우 사용.(선택 사항)
        //  callback : 결과를 전달 받을 콜백.(선택 사항)
        //   agent : Authenticate를 호출한 ConnectionAgent 객체.
        //   resultCode : Authenticate 결과
        //   loginedUserInfoList : 이 Account Id를 이용중인 login 된 User 정보.
        //   message : 서버에서 보내주는 추가 message. 
        //   payload: 서버 컨텐츠에서 보내주는 추가 데이터.
        connection.Authenticate(
            "deviceId",
            this.edtAccountId.string,
            this.edtPassword.string,
            null,
            (connectionAgent, resultCode, loginedUserInfoList: Array<LoginedUserInfo>, message: string, payload: Payload) => {
                console.log("Authenticate : " + ResultCodeAuth[resultCode] + (message != null && message.length > 0 ? "message : " + message : ""));
                if (ResultCodeAuth.AUTH_SUCCESS == resultCode) {
                    // 인증 성공
                    this.labelConnect.node.color = cc.Color.GREEN;
                    this.node.active = false;

                    this.onChat();
                } else {
                    // 인증 실패
                    this.labelConnect.node.color = cc.Color.RED;
                    this.node.active = true;
                    this.chat.node.active = false;
                    this.game.node.active = false;
                }
            }
        );
    }

    public onChat() {
        // ChatService UI 활성화
        this.node.active = false;
        this.menuNode.active = true;
        this.chat.node.active = true;
        this.game.node.active = false;
    }

    public onGame() {
        // GameService UI 활성화
        this.node.active = false;
        this.menuNode.active = true;
        this.chat.node.active = false;
        this.game.node.active = true;
    }

    public onDisconnect() {
        let connection = GameflexManager.GetInstance().GetConnectionAgent();

        // 접속 종료
        // Disconnect(reason: string, callback?: (agent: ConnectionAgent, resultCode: ResultCodeDisconnect, reason: string) => void, force: boolean, payload: Payload): void;
        //   reason : 접송 종료 이유. Disconnect를 호출하는 경우가 다양할 경우, 콜백에서 각각의 경우를 구분하기위해 사용.
        //   callback : 결과를 전달 받음. (선택 사항)
        //     agent : Disconnect 호출한 ConnectionAgent 객체.
        //     resultCode : Disconnect 결과.
        //     reason : 접속 종료 이유.
        //     force : 서버에서의 강제종료 여부. 중복접속, Kick, AdminKick 등.
        //     payload : 서버 컨텐츠에서 보내주는 추가 데이터.

        // 이 예제에서는 ConnectionAgent.AddOnDisconnect()로 등록한 콜백을 통해 결과를 처리하고 있습니다.
        // Disconnect호출 외에도 네트워크 환경으로 인한 접속종료등의 경우를 처리하기 위해 별도로 콜백을 등록해 사용합니다.
        connection.Disconnect("click Disconnect");
    }
}
