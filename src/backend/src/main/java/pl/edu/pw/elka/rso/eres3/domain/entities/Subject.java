package pl.edu.pw.elka.rso.eres3.domain.entities;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

/**
 * A subject on a faculty.
 */
@Entity
public class Subject implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;

	@NotNull
	@Size(min = 1, max = 200)
	@Column(length = 200, nullable = false)
	private String fullName;

	@NotNull
	@Size(min = 1, max = 20)
	@Column(length = 20, nullable = false)
	private String shortName;

	@NotNull
	private Byte didacticalUnits;

	@NotNull
	private Byte ects;

	@NotNull
	@Enumerated(EnumType.STRING)
	private SubjectType type;

	public Integer getId() {
		return id;
	}

	public void setId(final Integer id) {
		this.id = id;
	}

	public String getFullName() {
		return fullName;
	}

	public void setFullName(final String fullName) {
		this.fullName = fullName;
	}

	public String getShortName() {
		return shortName;
	}

	public void setShortName(final String shortName) {
		this.shortName = shortName;
	}

	public Byte getDidacticalUnits() {
		return didacticalUnits;
	}

	public void setDidacticalUnits(final Byte didacticalUnits) {
		this.didacticalUnits = didacticalUnits;
	}

	public Byte getEcts() {
		return ects;
	}

	public void setEcts(final Byte ects) {
		this.ects = ects;
	}

	public SubjectType getType() {
		return type;
	}

	public void setType(final SubjectType type) {
		this.type = type;
	}

	public enum SubjectType {
		EXAM, NO_EXAM
	}

}