var walkSpeed: float = 7; // regular speed
var crchSpeed: float = 3; // crouching speed
var crawlSpeed: float = 1.0f; // crouching speed
var runSpeed: float = 20; // run speed
var walkSound:float =0.5f; 
var crchSound:float =0.05f;
var runSound:float=1.0f;
var crchPitch:float=1.0f;
var walkPitch:float=1.3f;
var runPitch:float=1.8f;

private var chMotor: CharacterMotor;
private var ch: CharacterController;
private var tr: Transform;
private var height: float; // initial height
private var radius: float;
var crouching=false; 
 
function Start(){
    chMotor = GetComponent(CharacterMotor);
    tr = transform;
    ch = GetComponent(CharacterController);
 height = ch.height;
 radius = ch.radius;
}
 
function Update(){
 
    var h = height;
    var r = radius;
    var speed = walkSpeed;
    var temp:float=0;
    var voice=walkSound;
    var pitch=walkPitch;
    if (ch.isGrounded && Input.GetKey("left shift") || Input.GetKey("right shift")){
     voice=runSound;
        speed = runSpeed;
        pitch=runPitch;
    }
    if (Input.GetKey("v")){ // press v to crawl
     
        h = 0.05 * height;
        r=0.3*radius;
        speed = crawlSpeed; // slow down when crouching
        voice=crchSound;
        pitch=crchPitch;
        temp=0.03;
    }
    if (Input.GetKeyUp("v"))
    {
    temp=-0.03;
    }
    if (Input.GetKey("c")){ // press C to crouch
     
        h = 0.6 * height;
        speed = crchSpeed; // slow down when crouching
        voice=crchSound;
        pitch=crchPitch;
        //temp=0.03;
    }
    chMotor.movement.maxForwardSpeed = speed; // set max speed
    var lastHeight = ch.height; // crouch/stand up smoothly
    
    ch.height = Mathf.Lerp(ch.height, h, 5*Time.deltaTime);
    ch.radius = Mathf.Lerp(ch.radius, r, 5*Time.deltaTime);
    
    tr.position.y += (ch.height-lastHeight+temp)/2; // fix vertical position
    audio.volume=voice;
    audio.pitch=pitch;
    }