# ADR 1: Choosing a Backend Framework for ZeusEmployeeManagement

Date: 2023

## Status

Proposed

## Context

ZeusEmployeeManagement requires a backend framework that is capable of handling several tasks like saving work hours of the employees every day, calculating their remaining holidays, generating official documents by requests. The team has considered several frameworks, namely Nest.js, Spring Boot, and ASP.NET, each with its own merits and demerits. The chosen framework should align with the team’s expertise, project requirements, and long-term maintainability.

## Considered Options

### 1. Nest.js

- **Pros**:
  - **Simplicity**: Offers a simple and intuitive API, potentially reducing the learning curve.
  - **TypeScript Support**: Native support for TypeScript.
  - **Modular Structure**: Ensures scalable and maintainable codebase.
  - **Decorator-based Syntax**: Provides a high level of abstraction with a clean code structure.
  - **Versatility**: Can be used for building various types of server-side applications.
  
- **Cons**:
  - **Community and Ecosystem**: Smaller community and ecosystem compared to Spring Boot and ASP.NET.
  - **Maturity**: Relatively new in the market, which might pose risks or lack of features in the long run.

### 2. Spring Boot

- **Pros**:
  - **Mature and Robust**: Proven reliability and widely used in the industry.
  - **Rich Ecosystem**: Vast array of tools and libraries available.
  - **Security**: Robust security mechanisms with Spring Security.
  - **Microservices Architecture**: Excellent support for building microservices.
  
- **Cons**:
  - **Learning Curve**: Can be complex and might require more time to master.
  - **Verbosity**: Can be quite verbose, especially for simple applications.

### 3. ASP.NET

- **Pros**:
  - **Performance**: High-performance framework with powerful capabilities.
  - **Mature**: Stable and has been used to build numerous enterprise applications.
  - **Rich Ecosystem**: Access to a wide range of libraries and tools in the .NET ecosystem.
  - **Cross-Platform**: Can run on Windows, Linux, and macOS.
  
- **Cons**:
  - **Cost**: Potential costs associated with Windows hosting (if not using .NET Core).
  - **Complexity**: Can be complex for certain types of applications.

## Decision

We will proceed with Nest.js as the backend framework for ZeusEmployeeManagement.

## Rationale

- **Simplicity and Developer Experience**: Nest.js offers a straightforward and developer-friendly experience, which can accelerate development.
- **TypeScript Support**: The support for TypeScript ensures type safety and enhances developer productivity, not being left behind by the other frameworks.
- **Alignment with JavaScript/TypeScript Expertise**: Having more knowledge compared with the other frameworks.
- **Performance**: Nest.js provides the necessary performance capabilities that is required.
- **Flexibility**: The flexibility and modularity of Nest.js allow us to structure the project in a scalable and maintainable manner.

While Spring Boot and ASP.NET offer robust and mature solutions, the simplicity, and developer experience offered by Nest.js, along with its capabilities, align more closely with our project requirements and team expertise.

## Consequences

- **Positive**:
  - Faster development cycle due to the simplicity of Nest.js.
  - Leveraging team expertise in JavaScript/TypeScript.
  - Maintainable and scalable codebase due to the modular structure of Nest.js.
  
- **Negative**:
  - Might face challenges that are solved in more mature frameworks like Spring Boot and ASP.NET.
  - Dependency on the Node.js environment.
  - May need to explore solutions for specific use-cases due to the smaller ecosystem compared to Spring Boot and ASP.NET.

## Authors

Ballai Krisztina, Pataki Norbert, Ballai Norbert, Ballai Tamas
