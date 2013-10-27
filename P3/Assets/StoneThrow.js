#pragma strict
//var Stones : GameObject[];


var cube5:GameObject;

var minSpeed=0.5f;
var speed=0.5f;
var maxSpeed=20.0f;
var speedChange=0.2f;
var toggle=true;

private var temp:GameObject;



function Update () {
//speed=speed+0.1;
if(toggle)
	{	
		
		cube5.transform.position = transform.position + Vector3(1,0,0);
		
		if(!(speed > maxSpeed))
		{
			//Debug.Log("there");
			speed=speed+speedChange;
		}
	}
if(Input.GetKeyDown ("f"))
	{
	toggle=true;
	cube5  = GameObject.CreatePrimitive(PrimitiveType.Sphere);
	cube5.AddComponent(Rigidbody);
	cube5.transform.localScale=Vector3(0.25,0.25,0.25);
	cube5.rigidbody.useGravity=true;
	}
	
	if(Input.GetKeyUp("f"))
	{
	
	cube5.rigidbody.velocity = transform.TransformDirection (Vector3.forward * speed);
	speed=minSpeed;
	toggle=false;
	//audio.Play();
	}
	
	}
	
	
	
	
	
	
	
	

