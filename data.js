const class12 = [
    {id:1,name:"MPC",pre_re:"10th"},
    {id:2,name:"BiPC",pre_re:"10th"},
    {id:3,name:"CEC",pre_re:"10th"},
    {id:4,name:"HEC",pre_re:"10th"},
    {id:5,name:"MEC",pre_re:"10th"},
    {id:6,name:"MBiPC",pre_re:"10th"},
    {id:7,name:"ITI",pre_re:"10th"}
]
const undergraduate = [
    {id:1,name:"BTECH",pre_re:[1,2,6]},
    {id:2,name:"DEGREE",pre_re:[1,2,3,4,5,6,7]},
    {id:3,name:"CA",pre_re:[3,5]},
    {id:4,name:"MBBS",pre_re:[2,6]},
    {id:5,name:"B.PHARM",pre_re:[1,2,6]},
    {id:6,name:"B.ARC",pre_re:[1,6,]},
    {id:7,name:"LLB",pre_re:[3,4]},
]
const postgraduate =[
    {id:1,name:"MTECH",pre_re:[1,2]},
    {id:2,name:"MBA",pre_re:[1,2,3,4,5,6,7]},
    {id:4,name:"MSE",pre_re:[1,2,4,5,6]},
    {id:5,name:"PGDM (PG Diploma in Management)",pre_re:[1,2,3,4,5,6,7]},
    {id:6,name:"Master in LLB",pre_re:[7]},
    {id:7,name:"MCA",pre_re:[1,2]},
    {id:9,name:"Master in CA",pre_re:[3]},
    {id:10,name:"Master Doctor",pre_re:[4]},
    {id:11,name:"M.Sc",pre_re:[1,2,4,5,6]},
    {id:12,name:"Medical Professor",pre_re:[4]},
    {id:13,name:"Forensic Psychiatry",pre_re:[4,5]},
    {id:14,name:"Master in Pharmacy",pre_re:[5]},
    
]

module.exports = {class12,undergraduate,postgraduate}