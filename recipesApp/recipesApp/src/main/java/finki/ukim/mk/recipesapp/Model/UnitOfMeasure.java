package finki.ukim.mk.recipesapp.Model;

import lombok.*;

import jakarta.persistence.*;

@Data
@Entity
public class UnitOfMeasure {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String description;

}
