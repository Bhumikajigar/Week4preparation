var url='http://localhost:1337';
var request=require('supertest')(url);

describe("category model",function(){
	it("insert new record into record",function(done){
		var req= request.get("/create/category");
		req.send({
			data:{
			cid:"1"
			}
			
		})
		req.end(function(err,res){
			if(err)
			{
				throw err;
			}
			console.log(res.text);
			done();
		})

	}),
	it("delete record in category",function(done){
		var req= request.post("/Category/update/index");

		req.send({
			data:{
			cid:1
			}
		})
		req.end(function(err,res){
			if(err)
			{
				throw err;
			}
			console.log(res.text);
			done();
		})
	})

});
