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
	public bool inSight = false;
	bool folp = false;
	float t= 10;
	float tt = 10;
	bool ttimer = false;
	GameObject playerg;
	Transform player;
	float dist;
	Vector3 enemyStart;
	bool moving;
	NavMeshAI nmai;
	Follow fol;

	
	void Start()
	{
		//print ("Hello Start");
		 nmai = (NavMeshAI)this.GetComponent(typeof(NavMeshAI));
		 fol = (Follow)this.GetComponent(typeof(Follow));
		 playerg = GameObject.FindGameObjectWithTag("Player");
		 player = playerg.transform;
		 enemyStart = new Vector3(transform.position.x ,transform.position.y,transform.position.z);
	}
	
	void  Update (){
		//print (enemyStart.x);
		print (Vector3.Distance(this.transform.position, enemyStart));

		v = new Vector3(transform.position.x ,transform.position.y+0.5f,transform.position.z);
		v2 = new Vector3(transform.position.x ,transform.position.y,transform.position.z);
		
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
						inSight = true;
	
					}
				}
			if (Physics.Raycast(v2, dir2.normalized, out hit2, 1000))
			{

				if (hit2.collider.gameObject.name == "First Person Controller")
				{
					audio.Play();
					inSight = true;

				}
			}
			if (Physics.Raycast(v, dir3.normalized, out hit3, 1000))
			{
				//print ("green "+hit3.collider.gameObject.name);
				if (hit3.collider.gameObject.name == "First Person Controller")
				{
					audio.Play();
					inSight = true;

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
		if(inSight == true)
			ttimer = true;
		
		if(ttimer == true)
			if(tt>0)
				tt = tt - Time.deltaTime;
			else
				ttimer = false;
		inSight = false;
		calling();
		dist = Vector3.Distance(this.transform.position, player.transform.position);
		if(dist<6 && Input.GetKeyUp("v"))
		{
			//print ("Entered");
			ttimer = true;
		}
		//print (dist);
	}
	void OnTriggerEnter(Collider other)
	{
		//print ("Entered collision");
   		if(other.gameObject.tag=="Player" &&  (!(Input.GetKey("v"))))
    	inSight = true;   
	}
	void calling()
	{	


			if(ttimer == true)
				{
				moving = true;
				animation.Stop();
					if(dist<5)
					{
						//print ("Yay");
						Application.Quit();
					}
					print (tt);
					nmai.moveToPlayer();
					fol.followStuff();
				}
			else
			{
				if(moving == true)
				{
					nmai.agent.SetDestination(enemyStart);
					//fol.followStuff();
					if(Vector3.Distance(this.transform.position, enemyStart)<2)
			    	{
					
						moving = false;
						animation.Play();
						ttimer = false;
					}
				}
				//nmai.agent.speed = 0;
				tt = t;
			}
	}

}