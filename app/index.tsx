import { Text, View, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomePage() {
  const router = useRouter();

  return (
    <View>
      <Text>Welcome to the Home Page!</Text>
      <Button
        title="Go to About"
        onPress={() => router.push('/about')}
      />
    </View>
  );
}
