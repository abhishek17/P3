#pragma strict
var Location:Vector3;
private var timeS:int=0;
var timeE:int=500;
private var pause=false;
private var once=false;
private var targetPoint:Vector3;
private var targetRotation:Quaternion;
var pos : EnemyTrack;
private var newPositionx:float;
private var newPositionz:float;
private var yVelocity = 0.0;
var smoothTime = 0.3;
private var gameO:GameObject;
private var startTime:float=0.0f;
private var speed:float=0.00005f;
function Update()
{
	 if(pause)
	 {
	 
		if(timeS<timeE)
		{
			timeS++;
		}
		else
		{
			pos=gameO.GetComponent(EnemyTrack);
			Debug.Log(pos.enemyStart);
			
			//gameO.transform.position=pos.enemyStart;
			gameO.transform.position = Vector3.Lerp(gameO.transform.position, pos.enemyStart, (Time.time - startTime) * speed);
			Debug.Log(Mathf.Abs(gameO.transform.position.x-pos.enemyStart.x));
			if(Mathf.Abs(gameO.transform.position.x-pos.enemyStart.x)<3&&Mathf.Abs(gameO.transform.position.z-pos.enemyStart.z)<3)
			{
			Debug.Log("dsfsdv");
			gameO.animation.Play();
			pause=false;
			}
			
			//newPositionx = Mathf.SmoothDamp(gameO.transform.position.x, pos.enemyStart.x,
		           //                  yVelocity, smoothTime);
		    //newPositionz = Mathf.SmoothDamp(gameO.transform.position.z, pos.enemyStart.z,
		     //                        yVelocity, smoothTime);
			//gameO.transform.position = Vector3(newPositionx, gameO.transform.position.y, newPositionz);
	
		}
	}
	
}

function OnTriggerEnter (other : Collider) {
	//Debug.Log(other);
		if (other.name=="Enemy"&&!once)
		{
			gameO=other.gameObject;
			pause=true;
			once=true;
			//Debug.Log(Location);
			other.animation.Stop();
			
			
			//other.animation.Play();
			targetPoint = Vector3(Location.x, Location.y, Location.z) - other.transform.position;
       		targetRotation = Quaternion.LookRotation (targetPoint, Vector3.up);
       		other.transform.rotation = targetRotation;
			
			}
	}