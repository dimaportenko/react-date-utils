import React, {useState} from 'react';
import moment from 'moment-timezone';
import {DatePicker} from 'antd';
import './App.css';
import 'antd/dist/antd.css';

const timezone = 'US/Central';

function App() {
  const [date, setDate] = useState(new Date());
  const [str, setStr] = useState('');

  return (
    <div className="App">
      <header className="App-header">
        <p>{`Timezone: ${timezone}`}</p>
        <div>
          <DatePicker
            placeholder="select date"
            onChange={(value, dateString) => {
              setDate(new Date(dateString));
              setStr(moment.tz(dateString, timezone).toDate().getTime().toString());
            }}
          />
        </div>
        <p>Local: {date.getTime()}</p>
        <p>{timezone}: {str}</p>
      </header>
    </div>
  );
}

export default App;
