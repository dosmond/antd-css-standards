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
import { ThemeSwitcher } from "./components/ThemeSwitcher/ThemeSwitcher";
import styles from "./App.module.css";
import { ConflictingCard2 } from "./components/ConflictingCard2/ConflictingCard2";
import { DynamicCard } from "./components/DynamicCard/DynamicCard";

interface AppProps {
  onThemeChange: (theme: string) => void;
  currentTheme: string;
}

function App({ onThemeChange, currentTheme }: AppProps) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const items = [
    { label: "Item 1", value: "1" },
    { label: "Item 2", value: "2" },
    { label: "Item 3", value: "3" },
  ];

  return (
    <div className={styles.root}>
      <ThemeSwitcher
        onThemeChange={onThemeChange}
        currentTheme={currentTheme}
      />
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
              the ConflictingCard2 below.
            </Typography.Paragraph>

            <Space direction="vertical" style={{ width: "100%" }}>
              <ConflictingCard
                title="Error Style Card"
                highlight="This card uses error colors (red)"
              >
                <p>
                  This card uses simple class names like 'card', 'title', etc.
                  without any namespace.
                </p>
                <p>It's styled with error colors (red theme).</p>
              </ConflictingCard>

              <ConflictingCard2
                title="Success Style Card (Affected by Error Card)"
                highlight="This card should be green but is affected by the error card's styles"
              >
                <p>
                  This card uses the same class names as the error card above.
                </p>
                <p>
                  Even though it's meant to use success colors (green), the
                  error card's styles are overriding it!
                </p>
              </ConflictingCard2>

              <FeatureCard
                title="CSS Modules Card (Unaffected)"
                highlight="This card's styles remain unchanged"
              >
                <p>
                  This card uses CSS Modules, so its styles are scoped and
                  unaffected by the conflicting cards.
                </p>
                <p>
                  CSS Modules automatically generate unique class names to
                  prevent conflicts.
                </p>
              </FeatureCard>
            </Space>
          </Space>
        </Card>

        <Card title="Dynamic Styling with CSS Modules">
          <Space direction="vertical" size="large" style={{ width: "100%" }}>
            <Typography.Title level={4}>
              Using classnames with CSS Modules
            </Typography.Title>
            <Typography.Paragraph>
              CSS Modules can be combined with the classnames utility to create
              dynamic styles based on component state. Try interacting with the
              card below to see different states:
            </Typography.Paragraph>
            <ul>
              <li>Hover over the card to see the hover effect</li>
              <li>Click the card to toggle the selected state</li>
              <li>Click the button to toggle the highlighted state</li>
            </ul>

            <DynamicCard title="Interactive Card Example">
              <p>
                This card demonstrates how to use classnames with CSS Modules to
                create dynamic styles.
              </p>
              <p>
                The styles are scoped to this component and won't affect other
                components.
              </p>
            </DynamicCard>
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
