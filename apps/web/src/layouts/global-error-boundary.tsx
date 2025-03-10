import { useRouteError } from 'react-router';
import { Button } from '@/features/ui/button/button.tsx';
import { Center } from '@/features/ui/center/center.tsx';
import { ErrorBlock } from '@/features/ui/error-block/error-block.tsx';
import { Group } from '@/features/ui/group/group.tsx';
import { Stack } from '@/features/ui/stack/stack.tsx';
import { Text } from '@/features/ui/text/text.tsx';
import { Title } from '@/features/ui/title/title.tsx';

export const GlobalErrorBoundary = () => {
    const error = useRouteError();
    console.error('Global error boundary:', error);

    return (
        <Center>
            <Stack gap="md" w="480px">
                <Title order={1} size="lg">
                    An error occurred
                </Title>
                <Text>Please reload the page.</Text>
                <ErrorBlock error={error} />
                <Group grow gap="sm">
                    <Button variant="filled" onClick={() => window.history.back()}>
                        Go back
                    </Button>
                    <Button variant="filled" onClick={() => window.location.reload()}>
                        Reload
                    </Button>
                </Group>
            </Stack>
        </Center>
    );
};
