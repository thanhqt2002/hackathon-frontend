import userService from "./userService";
import { DataGrid } from "@material-ui/data-grid";
import { makeStyles } from '@material-ui/core/styles';
import { useState,useEffect } from "react";
import Header from "./Header";

const useStyles = makeStyles({
    root: {
        '& .gradient_0 ' : {
            color:'#57bb8a',
        },
        '& .gradient_5 ' : {
            color:'#63b682',
        },
        '& .gradient_10' : {
            color:'#73b87e',
        },
        '& .gradient_15' : {
            color:'#84bb7b',
        },
        '& .gradient_20' : {
            color:'#94bd77',
        },
        '& .gradient_25' : {
            color:'#a4c073',
        },
        '& .gradient_30' : {
            color:'#b0be6e',
        },
        '& .gradient_35' : {
            color:'#c4c56d',
        },
        '& .gradient_40' : {
            color:'#d4c86a',
        },
        '& .gradient_45' : {
            color:'#e2c965',
        },
        '& .gradient_50' : {
            color:'#f5ce62',
        },
        '& .gradient_55' : {
            color:'#f3c563',
        },
        '& .gradient_60' : {
            color:'#e9b861',
        },
        '& .gradient_65' : {
            color:'#e6ad61',
        },
        '& .gradient_70' : {
            color:'#ecac67',
        },
        '& .gradient_75' : {
            color:'#e9a268',
        },
        '& .gradient_80' : {
            color:'#e79a69',
        },
        '& .gradient_85' : {
            color:'#e5926b',
        },
        '& .gradient_90' : {
            color:'#e2886c',
        },
        '& .gradient_95' : {
            color:'#e0816d',
        },
        '& .gradient_100' : {
            color:'#dd776e',
        },
    },
  });

const columns = [
  { field: "id", headerName: "Rank" , width:120 ,    align: 'right',     headerAlign: 'right',},
  {
    field: "name",
    headerName: 'Name',
    width: 130,
    type: "number",
    headerAlign: 'right',
  },
  {
    field: "total",
    headerName: 'Total Score',
    width: 150,
    type: "number",
  },
  {
    field: "A",
    flex: 1,
    type: "number"
  },
  {
    field: "B",
    flex: 1,
    type: "number"
  },
  {
    field: "C",
    flex: 1,
    type: "number"
  },
  {
    field: "D",
    flex: 1,
    type: "number"
  },
  {
    field: "E",
    flex: 1,
    type: "number"
  },
  {
    field: "F",
    flex: 1,
    type: "number"
  },
  {
    field: "G",
    flex: 1,
    type: "number"
  },
  {
    field: "H",
    flex: 1,
    type: "number"
  },
  {
    field: "I",
    flex: 1,
    type: "number"
  },
  {
    field: "J",
    flex: 1,
    type: "number"
  },
  {
    field: "K",
    flex: 1,
    type: "number"
  },
  {
    field: "L",
    flex: 1,
    type: "number"
  },
];

const Scoreboard = ()=>{
    const classes = useStyles();
    const [loading,setLoading] = useState(true)
    const [scores,setscores] = useState([])
    useEffect(()=> {
        if(loading === true){
            userService.getScoreboard()
            .then((scores)=>{
                var dict = [];
                var len = 0;
                var prev = ''
                for(const s of scores){
                    if(s.user !== prev){
                        len++;
                        dict.push({name:s.user,total:0})
                        prev = s.user
                    }
                    dict[len - 1][s.task] = s.score
                    dict[len - 1]['total'] += s.score
                }
                dict.sort((a , b)=>{
                    console.log(a.total,b.total,a.total < b.total)
                    if(a.total > b.total)return -1;
                    return a.total < b.total;
                })
                for(var i = 0 ; i < len ; ++i){
                    console.log(dict[i])
                    dict[i]['id'] = i + 1;
                }
                return dict
            })
            .then((scores)=>{
                setLoading(false)
                setscores(scores)
            })
      }
    });
    if(loading === true)return <div/>
    return (
        <>
        <Header/>
        <div style={{ display: "flex" }}>
          <div style={{ flexGrow: 1 }} className={classes.root}>
            <DataGrid
              sortingOrder={["desc", "asc"]}
              disableSelectionOnClick
              autoHeight
              rows={scores}
              columns={columns}
              pageSize={10}
              getCellClassName={(params) => {
                if (params.field === 'name' || 
                    params.field === 'id' ||
                    params.field === 'total'){
                  return '';
                }
                if (params.value === undefined)return ''
                return 'gradient_' + (Math.floor((100-Number(params.value)) / 5) * 5);
              }}
            />
          </div>
        </div>
        </>
      );
}
export default Scoreboard;