import React, {useState} from 'react';
import moment from 'moment-timezone';
import {DatePicker} from 'antd';
import './App.css';
import 'antd/dist/antd.css';

const timezone = 'US/Central';

function App() {
  const [date, setDate] = useState(new Date());
  const [str, setStr] = useState('');
  const [timestampInput, setTimestampInput] = useState((new Date()).getTime().toString());

  return (
    <div className="App">
      <header className="App-header">
        <p>{`Timezone: ${timezone}`}</p>
        <div style={{ flexDirection: 'row'}}>
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
          <div>
            <input value={timestampInput} onChange={event => setTimestampInput(event.target.value)}/>
            <br />
            <p>Date from Input timestamp: {moment(Number.parseInt(timestampInput)).format('MM/DD/YYYY')}</p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
