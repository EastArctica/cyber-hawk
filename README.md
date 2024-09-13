# Protocol

# TBD Endpoint

Requests a task from the server

## Body

```ts
{
  name: string; //Name of the bot sending the request
}
```

## Response

```ts
{
  id: string; //task uuid
  type: string; //Task type
  body: {
  } //Information about the task
}
```

# TBD Endpoint

Sends a task completion message to the server

## Body

```ts
{
  name: string; //Name of bot sending request
  id: string; //ID of task completed
}
```

## Response

```ts
{
  status: string; //Either "Done", "TasksLeft", "InvalidTask"
}
```

# TBD Endpoint

Used for a bot to send information to the server for logging

## Body

```ts
{
  name: string;
  state: string;
  task: {
    id: string;
    type: string;
    body: {
    }
  }
}
```

## Response

```ts
{
  status: string; //either "accepted", or a 400 type error
}
```
