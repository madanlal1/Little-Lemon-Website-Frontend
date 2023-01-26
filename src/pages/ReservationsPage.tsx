import * as React from "react";
import { Button, Center, createStyles } from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import { IconCheck, IconX } from "@tabler/icons";
import { ReservationsBottom, ReservationsTop } from "src/components";
import { StateContext } from "src/context";
import { BookingFormValues, useBookingForm } from "src/hooks";
import { bookingFormValidation } from "src/validations";
import { colors } from "src/theme";

const useStyles = createStyles((theme) => ({
  button: {
    backgroundColor: colors.secondary,
    "&:hover": {
      backgroundColor: theme.colors.yellow[6],
    },
  },
}));

const images = [
  "restaurant.jpg",
  "restaurant-chef.jpg",
  "salad.jpg",
  "grill.jpg",
  "grilled-fish.jpg",
  "pasta.jpg",
];

const ReservationsPage = () => {
  const { classes } = useStyles();
  const { confirm, handleSwitchConfirmation, handleSendData } =
    React.useContext(StateContext);

  const { FormProvider, useForm } = useBookingForm();

  const initialValues: BookingFormValues = {
    seating: "",
    date: "",
    time: "",
    guests: "",
    occasion: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    requests: "",
    accept: "",
  };

  const form = useForm({
    initialValues,
    validate: bookingFormValidation,
  });

  const submitForm = () => {
    if (form.validate().hasErrors) {
      handleSendData();
      showNotification({
        title: "Incomplete info!",
        message: "Make sure to fill all the required fields.",
        color: "red",
        icon: <IconX />,
      });
    } else {
      showNotification({
        title: "Thank you!",
        message: "Your reservation has been confirmed. Check you email.",
        color: "green",
        icon: <IconCheck />,
      });
    }
  };

  return (
    <>
      <FormProvider form={form}>
        <ReservationsTop confirm={confirm} />
        <Center my="xl">
          <Button
            size="md"
            radius="lg"
            c="dark"
            fw="bolder"
            w={300}
            className={classes.button}
            type="submit"
            onClick={!confirm ? handleSwitchConfirmation : submitForm}
          >
            {!confirm ? "Reserve a Table" : "Confirm Reservation"}
          </Button>
        </Center>
      </FormProvider>

      <ReservationsBottom
        images={!confirm ? images.slice(0, 3) : images.slice(3, 6)}
      />
    </>
  );
};

export default ReservationsPage;
