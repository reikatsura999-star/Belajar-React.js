import React, { useState } from 'react';

function LengthInput({ value, onChange, label }) {
  return (
    <div>
      <label>{label}: </label>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

function toCentimeter(meter) {
  return meter * 100;
}

function toMeter(centimeter) {
  return centimeter / 100;
}

function tryConvert(value, convert) {
  const input = parseFloat(value);
  if (Number.isNaN(input)) return '';
  const output = convert(input);
  return output.toString();
}

function LengthConverter() {
  const [length, setLength] = useState('');
  const [scale, setScale] = useState('m');

  const handleMeterChange = (val) => {
    setLength(val);
    setScale('m');
  };

  const handleCentimeterChange = (val) => {
    setLength(val);
    setScale('cm');
  };

  const meter = scale === 'cm' ? tryConvert(length, toMeter) : length;
  const centimeter = scale === 'm' ? tryConvert(length, toCentimeter) : length;

  return (
    <div>
      <h2>Konversi Panjang (Meter ↔ Centimeter)</h2>
      <LengthInput label="Meter" value={meter} onChange={handleMeterChange} />
      <LengthInput label="Centimeter" value={centimeter} onChange={handleCentimeterChange} />
      <p>Nilai dalam Meter: {meter}</p>
      <p>Nilai dalam Centimeter: {centimeter}</p>
    </div>
  );
}

export default LengthConverter;
