import * as React from "react";
import { Box, Container, Title } from "@mantine/core";
import { BookingForm, SubmitForm } from "src/components";
import { colors } from "src/theme";

interface ReservationsTopProps {
  confirm?: boolean;
}

const ReservationsTop: React.FC<ReservationsTopProps> = ({ confirm }) => {
  return (
    <Box py="md" sx={{ backgroundColor: colors.primary }}>
      <Container>
        {confirm ? (
          <SubmitForm />
        ) : (
          <>
            <Title my="sm" c={colors.secondary}>
              Reservations
            </Title>
            <BookingForm />
          </>
        )}
      </Container>
    </Box>
  );
};

export default ReservationsTop;
