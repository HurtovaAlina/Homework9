//======== Task1 ============
let arr = ["Tom", "Sam", "Ray", "Bob"];
let [firstName, secondName, ,...rest] = arr;
console.log(firstName);
console.log(secondName);
console.log(rest);

//======== Task2 ============
let data = {
   names: ["Sam", "Tom", "Ray", "Bob"],
   ages: [20, 24, 22, 26],
};
let {names:[name1,name2,name3,name4], ages:[age1,age2,age3,age4]}= data;
console.log(name2); // "Tom"
console.log(age2); // 24
console.log(name4); // "Bob"
console.log(age4); // 26

//======== Task3 ============
function mul(array) {
    let mul =0;
    for (let elem of array){
     if (typeof elem == "number"){
       if (mul===0) mul=1
       mul = elem*mul;
     }
    }
   return mul;
   }
   console.log(mul([1, "str", 2, 3, true])); // 6
   console.log(mul([null, "str", false, true])); // 0


//======== Task4 ============
let server = {
    data: 0,
    convertToString: function (callback){
         callback(()  => this.data + "");
       }
 };
 let client = {
    server: server,
    result: "",
    calc: function (data) {
       this.server.data = data;
       this.server.convertToString(this.notification());
    },
    notification: function() {return (callback => {
          this.result = callback();
       });
 }
};
 client.calc(123);
 console.log(client.result); // "123"
 console.log(typeof client.result); // "string"


 //======== Task5 ============
    let keys = [1, 2, 3, 4];
    let values = ["div", "span", "b", "i"];

    function mapBuilder(keys,values){
        let map = new Map();
        for (let key of keys){
        map.set(key, values[key-1]);
        }
        return map;
        }
        
    
    let map = mapBuilder(keys, values);
    
    console.log(map.size); // 4
    console.log(map.get(2)); // "span"