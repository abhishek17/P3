using UnityEngine;
using System.Collections;

public class PlayerSight: MonoBehaviour 
{
	//Vector3 v =new Vector3(0,0,1);
	//private int start = 0;
	private int end = 30;
	private int temp = -30;
	
	
	void  Update (){
		
		Vector3 v = new Vector3(transform.position.x ,transform.position.y+0.5f,transform.position.z);
		//Vector3 v2 =new Vector3(transform.position.x,tranform.position.y+5,transform.position.z); 
		Vector3 v3=new Vector3(temp,0,end);
		
		RaycastHit hit;
		if(temp <end)
		{
			//Debug.DrawLine(transform.position, v, Color.red);
			if (Physics.Raycast(v, v3.normalized, out hit, 1000))
			{
			
				print ("1");
				print (hit.collider.gameObject.name);
				if (hit.collider.gameObject.name == "First Person Controller")
				{
					audio.Play();
					print ("2");
				}
			}
			temp++;
		}
		else
		{
			temp = -30;
		}
	}
}