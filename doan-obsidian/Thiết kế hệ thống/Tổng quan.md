### Microservices Breakout

| Microservices | Descriptions | Tech stacks | Deployment environment|
|--|--|--|--|
|User Pages|icremental-site generator|Next.js|Firebase|
|User Service|management portal for user|Next.js|Google Cloud Run|
|Application API|payment and database|Python|Google Cloud Function|
|Database| store transition data| Postgres|Cloud SQL|
|Google Firestore| store user data and setting |GCP|GCP|
### Diagram
```mermaid
flowchart TD
	subgraph inside
	    U(User service) -- write --> G[Google Firestore]
	    L(User pages) -- read-only --- G
	    B--> D[Database]
	    L -- donate --> P(Payment)
	    U -- info --> B(Balance)
    end
    subgraph outside
	    P-- using --- M(Momo API)
	    %% H -- mail --- E(Mailgun) %%
    end

```


Communication of microservices: RESTful API

Develop Environment | Test Environment | Production Environment
--|--|--
Localhost | Docker | Google cloud platform
