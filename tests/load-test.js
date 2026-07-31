import http from "k6/http";

import { check } from "k6";


export default function(){

 const response =
 http.get("https://example.com");


 check(response,{
   
 "status is 200":
 response.status === 200

 });

}