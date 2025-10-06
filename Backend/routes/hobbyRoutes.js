const express=require('express');
const{
    getAllHobbies,
    getAllHobbiesById,
    createHobby,
    updateHobby,
} = require('../services/hobbyService.js');

const router=express.Router();

router.get("/", async (req, res) => {
    try {
      const data = await getAllHobbies();
      res.json(data);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

router.get("/:id",async(req,res)=>{
    try{
        const{id}=req.params;
        const data=await getAllHobbiesById(id);
        if(!data){
            return res.status(404).json({error:"Hobby not found"});
        }
        res.json(data);
    }catch(err){
        res.status(500).json({error:err.message});
    }
});

router.post("/",async(req,res)=>{
    try{
        const hobbyData=req.body;
        const newHobby=await createHobby(hobbyData);
        res.status(201).json(newHobby);
    }catch(err){
        res.status(500).json({error:err.message});
    }

});
router.put("/:id",async(req,res)=>{
    try{
        const{id}=req.params;
        const hobbyData=req.body;
        const updatedHobby=await updateHobby(id,hobbyData);
        res.json(updatedHobby);
    }catch(err){
        res.status(500).json({error:err.message});
    }
});
module.exports=router;