import { Button, Card, Container, Progress, TextInput } from '@mantine/core'

export default function Home() {
  return (
    <Container size={500} my={50}>
      <Card shadow='sm' p='lg' radius='md' withBorder>
        <Button styles={{ root: { marginBottom: '1rem' } }} fullWidth>
          TypeScript + Prettier + ESLint + Mantine in NextJS
        </Button>
        <TextInput
          styles={{ root: { marginBottom: '1rem' } }}
          label='Input label'
          description='Input description'
        />
        <Progress styles={{ root: { marginBottom: '1rem' } }} value={78} />
      </Card>
    </Container>
  )
}
