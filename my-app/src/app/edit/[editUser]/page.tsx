"use client"

import { useParams } from 'next/navigation';
import * as React from 'react';

export interface  EditUserProps {
}

export default function EditUser (props:  EditUserProps) {
    const userAccount = useParams();

  return (
    <>
        <h1>Edit User</h1>
        <p>Slug:{JSON.stringify(userAccount)}</p>
        <p>Edit username and description here!</p> 
        {console.log("helo")}
    </>
  );
}
