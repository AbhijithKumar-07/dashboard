<<<<<<< HEAD
import React, { useEffect, useState } from "react";
=======
import React, { useEffect, useState } from 'react';
>>>>>>> 8b34ae03b9348da0154b1d8c111774b125ef6b7c
import {
  Box,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Spinner,
  Text,
<<<<<<< HEAD
} from "@chakra-ui/react";
import { BACKEND_URL } from "../index";
=======
} from '@chakra-ui/react';
import { BACKEND_URL } from '../index';
>>>>>>> 8b34ae03b9348da0154b1d8c111774b125ef6b7c

const BookingsPage = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
<<<<<<< HEAD
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
=======
  const [error, setError] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
>>>>>>> 8b34ae03b9348da0154b1d8c111774b125ef6b7c

    const fetchBookings = async () => {
      try {
        const res = await fetch(`${BACKEND_URL}/api/admin/bookings`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          if (res.status === 401) {
<<<<<<< HEAD
            throw new Error("Unauthorized – please log in again.");
          }
          if (res.status === 404) {
            throw new Error("API endpoint not found.");
          }
          throw new Error("Failed to fetch bookings.");
=======
            throw new Error('Unauthorized – please log in again.');
          }
          if (res.status === 404) {
            throw new Error('API endpoint not found.');
          }
          throw new Error('Failed to fetch bookings.');
>>>>>>> 8b34ae03b9348da0154b1d8c111774b125ef6b7c
        }

        const data = await res.json();

<<<<<<< HEAD
=======
        // Ensure we only set array data
>>>>>>> 8b34ae03b9348da0154b1d8c111774b125ef6b7c
        if (Array.isArray(data)) {
          setBookings(data);
        } else {
          setBookings([]);
<<<<<<< HEAD
          setError("Unexpected response from server.");
        }
      } catch (err) {
        console.error("Bookings fetch failed:", err);
=======
          setError('Unexpected response from server.');
        }
      } catch (err) {
>>>>>>> 8b34ae03b9348da0154b1d8c111774b125ef6b7c
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  if (loading) return <Spinner size="xl" />;

  if (error) {
    return (
      <Box mt={6}>
        <Heading size="md">Error</Heading>
        <Text color="red.500" mt={2}>
          {error}
        </Text>
      </Box>
    );
  }

  return (
    <Box>
      <Heading mb={6}>Bookings</Heading>
      {bookings.length === 0 ? (
        <Text>No bookings available.</Text>
      ) : (
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Customer</Th>
              <Th>Status</Th>
            </Tr>
          </Thead>
          <Tbody>
<<<<<<< HEAD
            {bookings.map((b) => (
              <Tr key={b.id}>
                <Td>{b.id}</Td>
                <Td>{b.customer_uid || "N/A"}</Td>
=======
            {bookings.map(b => (
              <Tr key={b.id}>
                <Td>{b.id}</Td>
                <Td>{b.customer || 'N/A'}</Td>
>>>>>>> 8b34ae03b9348da0154b1d8c111774b125ef6b7c
                <Td>{b.status}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      )}
    </Box>
  );
};

export default BookingsPage;

