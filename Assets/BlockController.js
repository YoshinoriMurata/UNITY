#pragma strict

function Start () {

}

function Update () {

}

function OnCollisionEnter(collision: Collision){
	Destroy(gameObject);
	
	rigidbody.velocity = rigidbody.velocity.normalized * 10;
	
	if (Mathf.Abs(rigidbody.velocity.y) < 3){
		rigidbody.velocity.y = rigidbody.velocity.y * 3;
	}
	
	if (Mathf.Abs(rigidbody.velocity.x) < 3){
		rigidbody.velocity.x = rigidbody.velocity.x * 3;
	}
}