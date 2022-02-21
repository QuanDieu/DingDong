
import { _decorator, Component, Node, Collider2D, Contact2DType, Vec3, systemEvent, SystemEventType, EventKeyboard, macro, BoxCollider, IPhysics2DContact, BoxCollider2D, EventMouse, Vec2, RigidBody, Input, input, EventTouch, director, Prefab, instantiate, } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = playerController
 * DateTime = Thu Feb 17 2022 09:46:39 GMT+0700 (Indochina Time)
 * Author = Nekoingame
 * FileBasename = playerController.ts
 * FileBasenameNoExtension = playerController
 * URL = db://assets/playerController.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('playerController')
export class playerController extends Component {
    // [1]
    // dummy = '';

    moveUp: boolean;
    speed: number = 300;

    // [2]
    // @property
    // serializableDummy = 0;
    @property (Node)
    CheckPoint1: Node =null!;
    @property (Node)
    CheckPoint2: Node =null!;
    @property({type: Prefab})
    public blockPrefab: Prefab|null = null;
    
    start () {
        this.moveUp = false;
        input.on(Input.EventType.TOUCH_START, this.onTouchStart,this)
        input.on(Input.EventType.TOUCH_END , this.onTouchEnd,this)
    }
  

    update () {
        
        let collider = this.getComponent(Collider2D);
        if (collider) {
           collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
       }
       

       this.movingControl();
    
        
    }

    onBeginContact (selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        
        if(otherCollider == this.CheckPoint1.getComponent(Collider2D)){
            this.moveUp = true;
        }
        else if (otherCollider == this.CheckPoint2.getComponent(Collider2D)){
            this.moveUp = false;
        }

        else {
            director.loadScene('new');
        }


        
    }
 
    movingControl(){
        if (this.moveUp == true)
        {
            let viTriMoi = new Vec3(this.node.position.x, this.node.position.y + this.speed * 0.05,0);
            this.node.position = viTriMoi;
            
            
        }
        else
        {
            let viTriMoi = new Vec3(this.node.position.x , this.node.position.y - this.speed * 0.05,0);
            this.node.position = viTriMoi;
            
        }
    }

    onTouchStart (event: EventTouch) {
            this.speed = 150;
            this.spawnBlock();
        }
        onTouchEnd (event: EventTouch) {
            this.speed = 300;
            this.spawnBlock();
        }
        
    spawnBlock(){
        let block = instantiate(this.blockPrefab);
        block.parent = this.node.parent;
        block.position = new Vec3(this.node.position.x - 600,this.node.position.y,0);
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
