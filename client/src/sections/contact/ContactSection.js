import "./ContactSection.css";
import { TextInput, Textarea, SimpleGrid, Group, Button } from "@mantine/core";

const ContactSection = () => {
  return (
    <section className="container-fluid contact-background">
      <div className="contact-section" id="contact">
        <div className="container">
          <div className="row">
            <h2 className="about-header">Getting in touch</h2>
          </div>
          <SimpleGrid
            cols={2}
            mt="xl"
            breakpoints={[{ maxWidth: "sm", cols: 1 }]}
          >
            <TextInput
              label="Name"
              placeholder="Your name"
              name="name"
              variant="filled"
            />
            <TextInput
              label="Email"
              placeholder="Your email"
              name="email"
              variant="filled"
            />
          </SimpleGrid>

          <TextInput
            label="Subject"
            placeholder="Subject"
            mt="md"
            name="subject"
            variant="filled"
          />
          <Textarea
            mt="md"
            label="Message"
            placeholder="Your message"
            maxRows={10}
            minRows={5}
            autosize
            name="message"
            variant="filled"
          />

          <Group position="center" mt="xl">
            <Button type="submit" size="md">
              Send message
            </Button>
          </Group>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
