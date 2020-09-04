import React from "react"
// import PropTypes from "prop-types"

const contact = props => {
  return (
    <div>
      <h1>Contact Us</h1>
      <form
        method="post"
        action="https://getform.io/{your-unique-getform-endpoint}"
      >
        <label>
          Email
          <input type="email" name="email" />
        </label>
        <label>
          Name
          <input type="text" name="name" />
        </label>
        <label>
          Message
          <input type="text" name="message" />
        </label>
      </form>
    </div>
  )
}

// contact.propTypes = {}

export default contact
