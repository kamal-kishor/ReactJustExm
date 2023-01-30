import React, { useState } from 'react'
import { Form, FormGroup, Label, Input } from 'reactstrap'

function BootstrapInput() {
  const [value, setValue] = useState('')

  return (
    <Form>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input
          type="email"
          name="email"
          id="exampleEmail"
          placeholder="Enter your email"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </FormGroup>
    </Form>
  )
}

export default BootstrapInput
