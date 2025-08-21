 import { render, screen } from '@testing-library/react';
 import App from './App';
 
-test('renders learn react link', () => {
+test('renders LinkedIn link', () => {
   render(<App />);
-  const linkElement = screen.getByText(/learn react/i);
-  expect(linkElement).toBeInTheDocument();
+  const link = screen.getByText(/LinkedIn/i);
+  expect(link).toBeInTheDocument();
 });
