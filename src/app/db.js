import { createInterface } from "readline";
import { Component } from '@angular/core';
import { User } from './data/cl.model';
import { HttpClient } from '@angular/common/http';
import { pl } from './data/pp';
import { TestService } from './test.service';
import { Router } from '@angular/router';
import { ContService } from './view/cont.service';
import { removeDebugNodeFromIndex } from '@angular/core/src/debug/debug_node';
import { connect } from "tls";

export class dd{
    constructor(){
        var lop=require('mysql');
        lop.createConnection({
host:"localhost",
user:"root",
password:"",
database:"pro"

        });
        
lop.connect((err,res) => {
    if (err) throw err;
    else       console.log('hi db2' );
  
});


    }
 
  
};