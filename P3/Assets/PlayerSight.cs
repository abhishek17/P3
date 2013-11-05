using UnityEngine;
using System.Collections;

public class PlayerSight: MonoBehaviour 
{

	private int end = 30;
	private int temp = -30;
	private int temp2 = 30;
	Vector3 dir;
	Vector3 dir2;
	Vector3 dir3;
	public int reach = 20;   //Increase this to increase reach of ray
	public float lowness = 0;
	Vector3 v;
	Vector3 v2;
	RaycastHit hit;
	RaycastHit hit2;
	RaycastHit hit3;
	
	void Awake()
	{
	v = new Vector3(transform.position.x ,transform.position.y+0.5f,transform.position.z);
	v2 = new Vector3(transform.position.x ,transform.position.y,transform.position.z);
	}
	
	void  Update (){
		
		float theta = transform.eulerAngles.y + 90+temp;
		float theta2 = transform.eulerAngles.y + 90-temp;
		
		theta = theta*3.14f/180f;
		theta2 = theta2*3.14f/180f;

		//print (transform.rotation.y);
		dir=new Vector3((-1)*reach*Mathf.Cos(theta),0,reach*Mathf.Sin(theta));
		dir2=new Vector3((-1)*reach*Mathf.Cos(theta2),0,reach*Mathf.Sin(theta2));
		dir3=new Vector3((-1)*reach*Mathf.Cos(theta2),(-1)*lowness,reach*Mathf.Sin(theta2));

		Debug.DrawRay(v,dir,Color.blue);
		Debug.DrawRay(v2,dir2,Color.red);
		Debug.DrawRay(v,dir3,Color.green);

		if(temp <end)
		{

			if (Physics.Raycast(v, dir.normalized, out hit, 1000))
			{
				if (hit.collider.gameObject.name == "First Person Controller")
					{
						audio.Play();

					}
				}
			if (Physics.Raycast(v2, dir2.normalized, out hit2, 1000))
			{

				if (hit2.collider.gameObject.name == "First Person Controller")
				{
					audio.Play();
				}
			}
			if (Physics.Raycast(v, dir3.normalized, out hit3, 1000))
			{
				print ("green "+hit3.collider.gameObject.name);
				if (hit3.collider.gameObject.name == "First Person Controller")
				{
					audio.Play();
				}
			}
			temp++;
			temp2--;
		}
		else
		{
			temp = -30;
			temp2 = 30;
		}
	}
}