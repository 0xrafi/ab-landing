import React from "react";

interface Props {
  email: string;
  buildOptions: () => {};
}

const googleScriptURL =
  "https://script.google.com/macros/s/AKfycbzKWk4MUWW_tqA9ji5kR_kGnem7eRv1BJXlfuOLJHwQa4uMlqL60KyvjKzAzh1-WTs5/exec";

function RsvpForm({ email, buildOptions }: Props) {
  const onSubmit = (event) => {
    event.preventDefault();
    const form = document.getElementById("my-form"); //TODO remove DOM access for actual React code
    const action = event.target.action;
    const data = new FormData(form as HTMLFormElement);
    fetch(action, {
      method: "POST",
      body: data,
    }).then(() => {
      alert("You have successfully RSVPed!");
      window.location.href = "/";
    });
  };

  return (
    <form
      method="POST"
      action={googleScriptURL}
      id="my-form"
      onSubmit={onSubmit}
    >
      <div id="hide">
        <input name="Email" value={email} type="text" required />
      </div>
      <div>
        <label>Name *</label>
        <input name="Name" type="text" required />
      </div>
      <br></br>
      <div>
        <label>How many guests will be in your party? *</label>
        <select name="NumberOfGuests">{buildOptions()}</select>
      </div>
      <br></br>
      <div>
        <label>Are you attending the wedding? *</label>
        <select name="AttendingWedding">
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
      <br></br>
      <div>
        <label>Are you attending the concert? *</label>
        <select name="AttendingConcert">
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
      <br></br>
      <div>
        <label>Are you attending the reception? *</label>
        <select name="AttendingReception">
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
      <br></br>
      <div className="buttonWrapper">
        <button type="submit">RSVP</button>
      </div>
    </form>
  );
}

export default RsvpForm;
