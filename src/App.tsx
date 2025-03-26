import { useState } from "react";
import {
  Button,
  Card,
  DatePicker,
  Form,
  Input,
  Rate,
  Select,
  Space,
  Switch,
  Typography,
} from "antd";
import { FeatureCard } from "./components/FeatureCard/FeatureCard";
import { PlainFeatureCard } from "./components/PlainFeatureCard/PlainFeatureCard";
import { ConflictingCard } from "./components/ConflictingCard/ConflictingCard";
import styles from "./App.module.css";
import { ConflictingCard2 } from "./components/ConflictingCard2/ConflictingCard2";

function App() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const items = [
    { label: "Item 1", value: "1" },
    { label: "Item 2", value: "2" },
    { label: "Item 3", value: "3" },
  ];

  return (
    <div className={styles.root}>
      <Space direction="vertical" size="large" style={{ width: "100%" }}>
        <Typography.Title>CSS Modules vs Plain CSS Demo</Typography.Title>

        <Card title="CSS Modules Advantages">
          <Space direction="vertical" size="large" style={{ width: "100%" }}>
            <Typography.Title level={4}>
              1. Style Encapsulation
            </Typography.Title>
            <Space direction="vertical" style={{ width: "100%" }}>
              <FeatureCard
                title="CSS Modules Card"
                highlight="This card uses CSS Modules"
              >
                <p>Notice how the styles are scoped to this component only.</p>
              </FeatureCard>

              <PlainFeatureCard
                title="Plain CSS Card"
                highlight="This card uses plain CSS"
              >
                <p>
                  This card uses BEM naming to avoid conflicts, but it's more
                  verbose.
                </p>
              </PlainFeatureCard>
            </Space>

            <Typography.Title level={4}>2. Naming Simplicity</Typography.Title>
            <Space direction="vertical" style={{ width: "100%" }}>
              <FeatureCard title="CSS Modules Example">
                <p>
                  CSS Modules automatically generate unique class names, so we
                  can use simple, semantic names like 'card', 'title', etc.
                </p>
              </FeatureCard>

              <PlainFeatureCard title="Plain CSS Example">
                <p>
                  With plain CSS, we need to use verbose BEM-style names like
                  'feature-card', 'feature-card-title' to avoid conflicts.
                </p>
              </PlainFeatureCard>
            </Space>

            <Typography.Title level={4}>3. Type Safety</Typography.Title>
            <FeatureCard title="TypeScript Integration">
              <p>
                CSS Modules provide type safety - TypeScript will catch typos in
                class names at compile time.
              </p>
              <p>
                Try changing 'styles.card' to 'styles.crd' and see the
                TypeScript error!
              </p>
            </FeatureCard>
          </Space>
        </Card>

        <Card title="Style Conflicts with Plain CSS">
          <Space direction="vertical" size="large" style={{ width: "100%" }}>
            <Typography.Title level={4}>
              The Problem with Global CSS
            </Typography.Title>
            <Typography.Paragraph>
              When using plain CSS, class names are global. This means that if
              two components use the same class name, they will affect each
              other's styles. Notice how the styles from ConflictingCard affect
              the PlainFeatureCard below.
            </Typography.Paragraph>

            <Space direction="vertical" style={{ width: "100%" }}>
              <ConflictingCard
                title="Conflicting Card (Affected by Plain CSS Card)"
                highlight="This card uses plain CSS with conflicting class names. This should not have a hover effect."
              >
                <p>
                  This card uses simple class names like 'card', 'title', etc.
                  without any namespace.
                </p>
              </ConflictingCard>

              <ConflictingCard2
                title="Plain CSS Card (Affected by ConflictingCard)"
                highlight="This card's styles are being overridden by ConflictingCard"
              >
                <p>
                  Notice how this card's styles are being affected by the
                  ConflictingCard's styles, even though they're different
                  components!
                </p>
                <p>
                  This is why we need to use BEM naming or CSS Modules to avoid
                  conflicts.
                </p>
              </ConflictingCard2>

              <FeatureCard
                title="CSS Modules Card (Unaffected)"
                highlight="This card's styles remain unchanged"
              >
                <p>
                  This card uses CSS Modules, so its styles are scoped and
                  unaffected by the ConflictingCard's styles.
                </p>
                <p>
                  CSS Modules automatically generate unique class names to
                  prevent conflicts.
                </p>
              </FeatureCard>
            </Space>
          </Space>
        </Card>

        <Card title="Original Ant Design Components">
          <Space direction="vertical" size="large" style={{ width: "100%" }}>
            <Typography.Title level={4}>Basic Components</Typography.Title>
            <Space direction="vertical">
              <Button type="primary">Primary Button</Button>
              <Button>Default Button</Button>
              <Input placeholder="Basic Input" />
              <Select
                style={{ width: 200 }}
                options={items}
                placeholder="Select items"
                mode="multiple"
                value={selectedItems}
                onChange={setSelectedItems}
              />
            </Space>

            <Typography.Title level={4}>Form Components</Typography.Title>
            <Form layout="vertical" style={{ maxWidth: 600 }}>
              <Form.Item label="Username">
                <Input />
              </Form.Item>
              <Form.Item label="Date">
                <DatePicker
                  value={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                />
              </Form.Item>
              <Form.Item label="Rate">
                <Rate defaultValue={3} />
              </Form.Item>
              <Form.Item label="Switch">
                <Switch defaultChecked />
              </Form.Item>
            </Form>
          </Space>
        </Card>
      </Space>
    </div>
  );
}

export default App;
