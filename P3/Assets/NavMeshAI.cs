using UnityEngine;
using System.Collections;

public class NavMeshAI : MonoBehaviour {
	
	public Transform target;
	public NavMeshAgent agent;
	
	void Start () {
		agent = GetComponent<NavMeshAgent>();
	}
	
	// Update is called once per frame
	void Update () 
	{
		//ins = playersight.inSight;
		//print (ins);
	}
	public void moveToPlayer()
	{
		//print ("Move is called");
		agent.SetDestination(target.position);
	}
}