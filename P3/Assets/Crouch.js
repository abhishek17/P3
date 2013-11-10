var walkSpeed: float = 4; // regular speed
var crchSpeed: float = 2; // crouching speed
var crawlSpeed: float = 0.5f; // crouching speed
var runSpeed: float = 8; // run speed
var walkSound:float =0.5f; 
var crchSound:float =0.05f;
var runSound:float=1.0f;
var crchPitch:float=1.0f;
var walkPitch:float=1.3f;
var runPitch:float=1.8f;
var toggle=false;

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
 var h = height;
    var r = radius;
    var speed = walkSpeed;
    var temp:float=0;
    var voice=walkSound;
    var pitch=walkPitch;
}
 
function Update(){
 
 	if(!toggle)
 	{
    h = height;
    r = radius;
    speed = walkSpeed;
    
    voice=walkSound;
    pitch=walkPitch;
    }
    else
    {
    h = 0.6 * height;
    r = radius;
        speed = crchSpeed; // slow down when crouching
        voice=crchSound;
        pitch=crchPitch;
    }
    if (ch.isGrounded && Input.GetKey("left shift") || Input.GetKey("right shift")){
     voice=runSound;
        speed = runSpeed;
        pitch=runPitch;
    }
    if (Input.GetKey("v")){ // press v to crawl
     if (Input.GetKey("w")||Input.GetKey("a")||Input.GetKey("s")||Input.GetKey("d")){
        h = 0.05 * height;
        r=0.3*radius;
        speed = crawlSpeed; // slow down when crouching
        voice=crchSound;
        pitch=crchPitch;
        
    }}
    
    if (Input.GetKeyDown("c")){ // press C to crouch
     
     	if(!toggle)
     		toggle=true;
     	else
     		toggle=false;
        
        //temp=0.03;
    }
    chMotor.movement.maxForwardSpeed = speed; // set max speed
    chMotor.movement.maxSidewaysSpeed = speed;
    chMotor.movement.maxBackwardsSpeed = speed;
    var lastHeight = ch.height; // crouch/stand up smoothly
    
    ch.height = Mathf.Lerp(ch.height, h, 5*Time.deltaTime);
    ch.radius = Mathf.Lerp(ch.radius, r, 5*Time.deltaTime);
    
    tr.position.y += (ch.height-lastHeight)/2; // fix vertical position
    audio.volume=voice;
    audio.pitch=pitch;
    }