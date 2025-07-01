import Hotel from "../models/Hotel.js"

//CREATE

export const createHotel=async(req,res,next)=>{
  const newHotel=new Hotel (req.body)
  try{
    const savedHotel= await newHotel.save()
    res.status(200).json(savedHotel)
  }catch(err){
    next(err)
  }
}

//UPDATE

export const updateHotel=async(req,res,next)=>{
  try{
    const updatedHotel= await Hotel.findByIdAndUpdate(req.params.id,
      {$set:req.body},
      {new:true}
    );
    res.status(200).json(updatedHotel)
  }catch(err){
    next(err)
  }
}

//DELETE

export const deleteHotel=async(req,res,next)=>{

try{
  await Hotel.findByIdAndDelete(req.params.id);
  res.status(200).json("Hotel has been deleted.")
}catch(err){
  next(err)
}
}

//GET

export const getHotel=async(req,res,next)=>{
  try{
  const Hotel= await Hotel.findById(req.params.id,
  );
  res.status(200).json(Hotel)
}catch(err){
  next(err)
}
}

//GETALL

export const getHotels = async (req, res, next) => {
  const { min, max, featured, ...others } = req.query;
  const minPrice = parseInt(min) || 1;
  const maxPrice = parseInt(max) || 9999;

  if (featured !== undefined) {
    others.featured = featured === "true";
  }

  try {
    const hotels = await Hotel.find({
      ...others,
      cheapestPrice: { $gte: minPrice, $lte: maxPrice },
    }).limit(parseInt(req.query.limit) || 100);

    res.status(200).json(hotels);
  } catch (err) {
    next(err);
  }
};




export const countByCity=async(req,res,next)=>{
  const cities=req.query.cities.split(",")
  try{
  const list= await Promise.all(cities.map(city=>{
    return Hotel.countDocuments({city:city})
  }));
  res.status(200).json(list)
}catch(err){
  next(err)
}}

export const countByType=async(req,res,next)=>{
  try{
  const hotelCount=await Hotel.countDocuments({type:"hotel"});
  const apartmentCount= await Hotel.countDocuments({type:"apartment"});
  const resortCount= await Hotel.countDocuments({type:"resort"});
  const villaCount= await Hotel.countDocuments({type:"villa"});
  const cabinCount= await Hotel.countDocuments({type:"cabin"});

  res.status(200).json([
    {type:"Hotels", count:hotelCount},
    {type:"Apartments", count:apartmentCount},
    {type:"Resorts", count:resortCount},
    {type:"Villas", count:villaCount},
    {type:"Cabins", count:cabinCount},
  ]);
}catch(err){
  next(err)
}}