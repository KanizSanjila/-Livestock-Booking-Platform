"use client";

import { Envelope } from "@gravity-ui/icons";
import {
  Button,
  Input,
  Label,
  Modal,
  Surface,
  TextField,
} from "@heroui/react";
import { useState } from "react";
import toast from "react-hot-toast";

export function ModalForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    toast.success("Booking Successful ✅");


    setForm({
      name: "",
      email: "",
      phone: "",
      address: "",
    });
  };

  return (
    <Modal>
      <Button variant="secondary" className="text-white bg-blue-500">
        Booking form
      </Button>

      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />

            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <Envelope className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Contact Us</Modal.Heading>
            </Modal.Header>

            <Modal.Body className="p-6">
              <Surface variant="default">
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                  <TextField className="w-full">
                    <Label>Name</Label>
                    <Input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                    />
                  </TextField>

                  <TextField className="w-full">
                    <Label>Email</Label>
                    <Input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                    />
                  </TextField>

                  <TextField className="w-full">
                    <Label>Phone</Label>
                    <Input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                    />
                  </TextField>

                  <TextField className="w-full">
                    <Label>Address</Label>
                    <Input
                      name="address"
                      value={form.address}
                      onChange={handleChange}
                      placeholder="Enter your Address"
                    />
                  </TextField>

                  <Modal.Footer>
                    <Button slot="close" variant="secondary">
                      Cancel
                    </Button>

                    <Button type="submit">Submit</Button>
                  </Modal.Footer>

                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}

