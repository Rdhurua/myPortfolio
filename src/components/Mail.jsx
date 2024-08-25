import React, { useState } from 'react';
import right from "/src/assets/images/accept.png"
import wrong from "/src/assets/images/remove.png"

function EmailValidator() {
  const [email, setEmail] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [Rdata,setRdata]=useState("");

  const validateEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);

    const apiKey = "ema_live_HjMO2BNjpL3Y8SwSFxnWNizlV7ERCnJFjudk0Lv8";
    const url = `https://api.emailvalidation.io/v1/info?apikey=${apiKey}&email=${email}`;
    try {
      const response = await fetch(url);
      const data = await response.json();

      if (response.ok) {
        setResult(data);
        setRdata(data);
          console.log(data);
           console.log(data.state);
         
      } else {
        setError(data.message || 'Something went wrong!');
      }
    } catch (err) {
      setError('Failed to validate email. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold text-center mb-6">Email Validator</h2>
      <form onSubmit={validateEmail} className="space-y-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="w-full p-3 border border-gray-300 rounded-md"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700"
        >
          {loading ? 'Validating...' : 'Validate Email'}
        </button>
      </form>

      {error && (
        <div className="mt-4 p-4 text-red-600 bg-red-100 rounded-md">
          {error}
        </div>
      )}

      {result && !loading && (
        <div className="mt-4 p-4 bg-gray-100 rounded-md">
          <h3 className="text-lg font-semibold mb-2">Validation Result:</h3>
          {/* {Object.keys(result).map((key) => (
           
            (<div key={key} className="mb-2 bg-blue-300">
              <strong>{key}:</strong> {result[key]?.toString()}
            </div>)
          ))} */}

<p className='text-black text-2xl'>{Rdata.state=="deliverable" ?<img className='h-7 w-7'src={right}/>:<img className='h-7 w-7' src={wrong}/>}</p>
         
           
          
        </div>
      )}
    </div>
  );
}

export default EmailValidator;
