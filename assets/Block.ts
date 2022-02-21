
import { _decorator, Component, Node , Vec3 } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = Block
 * DateTime = Thu Feb 17 2022 15:18:25 GMT+0700 (Indochina Time)
 * Author = Nekoingame
 * FileBasename = Block.ts
 * FileBasenameNoExtension = Block
 * URL = db://assets/Block.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('Block')
export class Block extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;
    @property (Node)
    player = null;

    start () {
        // [3]
    }

     update (deltaTime: number) {
        let viTriMoi = new Vec3(this.node.position.x + 400 * 0.06, this.node.position.y,this.node.position.z);
        this.node.position = viTriMoi;
     }
}

/**
 * [1] Class member could be defined like this.
 * [2] Use `property` decorator if your want the member to be serializable.
 * [3] Your initialization goes here.
 * [4] Your update function goes here.
 *
 * Learn more about scripting: https://docs.cocos.com/creator/3.4/manual/en/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.4/manual/en/scripting/decorator.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.4/manual/en/scripting/life-cycle-callbacks.html
 */
