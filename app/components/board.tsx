"use client";
import React, { useEffect, useState } from 'react'
import '@/app/icons-minecraft-0.4.css'
import './icons'

const Board = () => {

  interface Item {
    name: string;
    icon: string;
    color: boolean[];
  }

  interface IconData {
    label: string;
    name: string;
    css: string;
  }

  let icons: IconData[];

  const [data, setData] = useState<Item[][]>([]);


  const createData = () => {
    const data: Item[][] = [];
    for (let i = 0; i < 5; i++) {
      const row: Item[] = [];
      for (let j = 0; j < 5; j++) {
        let temp: Item = {
          name: "stone",
          icon: "",
          color: [false, false, false, false],
        }
        temp.icon = icons.find(icon => icon.name === temp.name)?.css || "";
        row.push(temp);
      }
      data.push(row);
    }
    setData(data);
  };

  loadIcons();

  return (
    <div>
      <div>board</div>
      <button onClick={createData}>Create Data</button>
      {data.map((row, i) => (
        <div key={i}>
          {row.map((item, j) => (
            <div key={j}>
            <i className={"icon-minecraft " + item.icon}></i>
            {item.name}</div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Board
