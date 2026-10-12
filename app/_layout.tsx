import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { cores } from '../styles/tema';

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <StatusBar style="light" />
      <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: cores.fundo } }}>
        <Stack.Screen name="index" /><Stack.Screen name="catalogo" />
        <Stack.Screen name="detalhes" /><Stack.Screen name="sobre" />
      </Stack>
    </SafeAreaProvider>
  );
}
