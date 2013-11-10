using UnityEngine;
using System.Collections;



public class EndGame : MonoBehaviour {
	
	PlayerSight ps;
	
	// Use this for initialization
	void Start () {
	ps = (PlayerSight)this.GetComponent(typeof(PlayerSight));
	}
	
	// Update is called once per frame
	void Update () {
	
	}
	 void OnTriggerEnter(Collider collision) {
		//print ("Yay I won before");
		if(collision.gameObject.name == "First Person Controller" )
		{
			//print ("Yay I won");
			Application.LoadLevel("Won");
		}
	}
}
