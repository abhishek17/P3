using UnityEngine;
using System.Collections;

public class Follow : MonoBehaviour {

	public Transform target;
	public float movspeed = 3;
	public float rotatespeed = 3;
	public PlayerSight other;
	
	void Awake () {
	target = GameObject.FindWithTag("Player").transform;
	}
	
	// Update is called once per frame
	void Update () {
		PlayerSight playersight = (PlayerSight)this.GetComponent(typeof(PlayerSight));
		bool ins = playersight.inSight;
		//print (ins);
	}
		public void followStuff()
		{
			transform.LookAt(target.transform);
			transform.Translate(Vector3.forward * movspeed * Time.deltaTime);	
		}
	}
