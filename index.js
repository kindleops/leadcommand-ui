import { initializeBlock, Box, Text } from '@airtable/blocks';
import React from 'react';

function LeadCommandApp() {
  return (
    <Box padding={3} backgroundColor="#0b0c10">
      <Text textColor="white" size="large">
        🚀 LeadCommand Chat UI Connected
      </Text>
    </Box>
  );
}

initializeBlock(() => <LeadCommandApp />);