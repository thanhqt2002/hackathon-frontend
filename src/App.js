import { useState, useEffect} from 'react'
import Header from './components/Header'
import Body from './components/Body'

const App = ()=>{
  const [key, setKey] = useState('home');
  const fake_tasks = [
    {
      id:0,
      title:"Problem 1",
      content:
      `Tìm 1 hoán vị bị ẩn của từ 1 đến 7. Gọi đó là $a_1 , a_2 , a_3 , ... , a_7$. Biết rằng, hoán vị là một dãy số gồm các số nguyên dương từ 1 đến 7 và mỗi số xuất hiện đúng một lần.
       Cho biết trong dãy $a$, $a_i = 1 , a_j = 7$ thì $i < j$.  
       Ví dụ: dãy $(1, 2, 3, 4, 5, 6, 7)$ là 1 dãy hợp lệ nhưng dãy $(7, 1, 2, 3, 4, 5, 6)$ là 1 dãy không hợp lệ và không có trong bộ câu hỏi.
       Trong mỗi truy vấn bạn có thể hỏi 1 câu hỏi có dạng $(l , r)$. Chương trình sẽ trả lại $\\max(a_l, …, a_r) – \\min(a_l, …, a_r)$.
       Để trả lời câu hỏi thí sinh hãy nhập $0 \\space 0$ rồi nhập dãy đáp án. Sau tối đa $12$ truy vấn cần in ra.
      `, 
      subtasks:1,
    },
    
    {
      id:1,
      title:"Problem 2",
      content:`
      Tìm 1 hoán vị bị ẩn của từ 1 đến 7. Gọi đó là $a_1 , a_2 , a_3 , ... , a_7$. Biết rằng, hoán vị là một dãy số gồm các số nguyên dương từ 1 đến 7 và mỗi số xuất hiện đúng một lần.
      Cho biết trong dãy $a$, $a_i = 1 , a_j = 7$ thì $i < j$.  
      Ví dụ: dãy $(1, 2, 3, 4, 5, 6, 7)$ là 1 dãy hợp lệ nhưng dãy $(7, 1, 2, 3, 4, 5, 6)$ là 1 dãy không hợp lệ và không có trong bộ câu hỏi.
      Trong mỗi truy vấn bạn có thể hỏi 1 câu hỏi có dạng $(l , r)$. Chương trình sẽ trả lại $\\max(a_l, …, a_r) – \\min(a_l, …, a_r)$.
      Để trả lời câu hỏi thí sinh hãy nhập $0 \\space 0$ rồi nhập dãy đáp án. Sau tối đa $12$ truy vấn cần in ra.
      `,
      subtasks:2,
    },
    {
      id:2,
      title:"Problem 3",
      content:`
      Tìm 1 hoán vị bị ẩn của từ 1 đến 7. Gọi đó là $a_1 , a_2 , a_3 , ... , a_7$. Biết rằng, hoán vị là một dãy số gồm các số nguyên dương từ 1 đến 7 và mỗi số xuất hiện đúng một lần.
      Cho biết trong dãy $a$, $a_i = 1 , a_j = 7$ thì $i < j$.  
      Ví dụ: dãy $(1, 2, 3, 4, 5, 6, 7)$ là 1 dãy hợp lệ nhưng dãy $(7, 1, 2, 3, 4, 5, 6)$ là 1 dãy không hợp lệ và không có trong bộ câu hỏi.
      Trong mỗi truy vấn bạn có thể hỏi 1 câu hỏi có dạng $(l , r)$. Chương trình sẽ trả lại $\\max(a_l, …, a_r) – \\min(a_l, …, a_r)$.
      Để trả lời câu hỏi thí sinh hãy nhập $0 \\space 0$ rồi nhập dãy đáp án. Sau tối đa $12$ truy vấn cần in ra.
      `,
      subtasks:3,
    },
    {
      id:3,
      title:"Problem 4",
      content:`
      Tìm 1 hoán vị bị ẩn của từ 1 đến 7. Gọi đó là $a_1 , a_2 , a_3 , ... , a_7$. Biết rằng, hoán vị là một dãy số gồm các số nguyên dương từ 1 đến 7 và mỗi số xuất hiện đúng một lần.
      Cho biết trong dãy $a$, $a_i = 1 , a_j = 7$ thì $i < j$.  
      Ví dụ: dãy $(1, 2, 3, 4, 5, 6, 7)$ là 1 dãy hợp lệ nhưng dãy $(7, 1, 2, 3, 4, 5, 6)$ là 1 dãy không hợp lệ và không có trong bộ câu hỏi.
      Trong mỗi truy vấn bạn có thể hỏi 1 câu hỏi có dạng $(l , r)$. Chương trình sẽ trả lại $\\max(a_l, …, a_r) – \\min(a_l, …, a_r)$.
      Để trả lời câu hỏi thí sinh hãy nhập $0 \\space 0$ rồi nhập dãy đáp án. Sau tối đa $12$ truy vấn cần in ra.
      `,
      subtasks:4,
    },
    {
      id:4,
      title:"Problem 5",
      content:`
      Tìm 1 hoán vị bị ẩn của từ 1 đến 7. Gọi đó là $a_1 , a_2 , a_3 , ... , a_7$. Biết rằng, hoán vị là một dãy số gồm các số nguyên dương từ 1 đến 7 và mỗi số xuất hiện đúng một lần.
      Cho biết trong dãy $a$, $a_i = 1 , a_j = 7$ thì $i < j$.  
      Ví dụ: dãy $(1, 2, 3, 4, 5, 6, 7)$ là 1 dãy hợp lệ nhưng dãy $(7, 1, 2, 3, 4, 5, 6)$ là 1 dãy không hợp lệ và không có trong bộ câu hỏi.
      Trong mỗi truy vấn bạn có thể hỏi 1 câu hỏi có dạng $(l , r)$. Chương trình sẽ trả lại $\\max(a_l, …, a_r) – \\min(a_l, …, a_r)$.
      Để trả lời câu hỏi thí sinh hãy nhập $0 \\space 0$ rồi nhập dãy đáp án. Sau tối đa $12$ truy vấn cần in ra.
      `,
      subtasks:5,
    },
    {
      id:5,
      title:"Problem 6",
      content:"ABC",
      subtasks:5,
    },
    {
      id:6,
      title:"Problem 7",
      content:"ABC",
      subtasks:5,
    },
    {
      id:7,
      title:"Problem 8",
      content:"ABC",
      subtasks:6,
    },
    {
      id:8,
      title:"Problem 9",
      content:`abc`,
      subtasks:5,
    },
  ]
  const [tasks, setTasks] = useState([...fake_tasks])
    const onSubmitTask = (taskid,val1,val2,val3,val4,val5,val6)=>{
    console.log(taskid,val1,val2,val3,val4,val5,val6)
  }
  console.log(tasks[0].content)
  return (
    <>
    <Header/>
    <br/>
    <Body tasks={tasks} onSubmit={onSubmitTask}/>
    </>
  );
}

export default App
